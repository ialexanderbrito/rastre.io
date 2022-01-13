import { Helmet } from 'react-helmet';

import { Header } from 'components/Header';

import { useRastreamento } from 'context/Rastreamento';

import './styles.scss';

export function Rastreio() {
  const {
    objeto,
    handleChangeCodigoRastreio,
    handlePressEnter,
    verificarEvento,
    transformarDataEHora,
    buscarRastreio,
  } = useRastreamento();

  return (
    <>
      <Helmet>
        <title>rastre.io</title>
      </Helmet>
      <div className="wrapper">
        <Header />
        <div className="container">
          <h1>
            rastre<strong>.</strong>
            <b>io</b>
          </h1>
          <div className="container-rastreio">
            <input
              type="text"
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
