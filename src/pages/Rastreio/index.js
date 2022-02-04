import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { BiBookmark } from 'react-icons/bi';

import { Header } from 'components/Header';

import { useRastreamento } from 'context/Rastreamento';
import { useTheme } from 'context/Theme';

import './styles.scss';

export function Rastreio() {
  const {
    codigoRastreio,
    objeto,
    handleChangeCodigoRastreio,
    handlePressEnter,
    verificarEvento,
    transformarDataEHora,
    buscarRastreio,
    handleSaveRastreio,
  } = useRastreamento();

  const { theme } = useTheme();

  useEffect(() => {
    if (codigoRastreio !== '') {
      buscarRastreio();
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>rastre.io</title>
      </Helmet>
      <div className="wrapper" data-theme={theme}>
        <Header />
        <div className="container">
          <h1>
            rastre<strong>.</strong>
            <b>io</b>
          </h1>
          <div className="container-rastreio">
            <input
              type="text"
              value={codigoRastreio}
              maxLength={13}
              className="input"
              onChange={handleChangeCodigoRastreio}
              placeholder="Digite o código de rastreio"
              onKeyPress={(e) => handlePressEnter(e)}
            />
            <button
              type="button"
              className="button-rastreio"
              onClick={() => buscarRastreio()}
            >
              buscar
            </button>
          </div>

          <button
            className="button-save"
            type="button"
            onClick={() => {
              handleSaveRastreio(codigoRastreio);
            }}
          >
            <BiBookmark color="#FFF" size={24} />
          </button>

          {objeto && (
            <>
              {objeto?.eventos?.map((evento) => (
                <div key={evento.descricao} className="container-evento">
                  <div className="container-info">
                    {verificarEvento(evento)}
                    <div className="container-descricao">
                      <span>{evento.descricao}</span>
                    </div>
                  </div>
                  <div className="container-local">
                    <span>{evento.unidade.tipo}: </span>
                    <span>
                      {evento.unidade.endereco.cidade || evento.unidade.nome}
                    </span>
                  </div>
                  <div className="container-status">
                    <span>{transformarDataEHora(evento.dtHrCriado)}</span>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </>
  );
}
