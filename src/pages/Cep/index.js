import { Helmet } from 'react-helmet';

import { Header } from 'components/Header';

import { useCep } from 'context/Cep';
import { useTheme } from 'context/Theme';

import './styles.scss';

export function Cep() {
  const { theme } = useTheme();
  const {
    cep,
    allCep,
    buscarCep,
    handleChangeCep,
    handlePressEnter,
    formatarCep,
  } = useCep();

  return (
    <>
      <Helmet>
        <title>busca.cep</title>
      </Helmet>
      <div className="wrapper" data-theme={theme}>
        <Header />
        <div className="container">
          <h1>
            busca<strong>.</strong>
            <b>cep</b>
          </h1>
          <div className="container-rastreio">
            <input
              type="text"
              maxLength={8}
              className="input"
              onChange={handleChangeCep}
              value={formatarCep(cep)}
              placeholder="Digite o CEP"
              onKeyPress={(e) => handlePressEnter(e)}
            />
            <button
              type="button"
              className="button-rastreio"
              onClick={() => buscarCep()}
            >
              buscar
            </button>
          </div>

          {allCep.length === 0 || allCep.erro === true ? (
            <></>
          ) : (
            <div className="container-cep">
              <div className="container-cep-info">
                <strong>CEP:</strong>
                <p>{allCep.cep}</p>
              </div>
              <div className="container-cep-info">
                <strong>UF:</strong>
                <p>{allCep.uf}</p>
              </div>
              <div className="container-cep-info">
                <strong>Rua:</strong>
                <p>{allCep.logradouro}</p>
              </div>
              <div className="container-cep-info">
                <strong>Município :</strong>
                <p>{allCep.localidade}</p>
              </div>
              <div className="container-cep-info">
                <strong>Bairro:</strong>
                <p>{allCep.bairro}</p>
              </div>
              <div className="container-cep-info">
                <strong>DDD:</strong>
                <p>{allCep.ddd}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
