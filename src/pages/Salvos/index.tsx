import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';

import { useAuth } from 'context/Auth';
import { useRastreamento } from 'context/Rastreamento';
import { useTheme } from 'context/Theme';

import { Header } from 'components/Header';

import './styles.scss';

export function Salvos() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { setCodigoRastreio } = useRastreamento();

  const { theme } = useTheme();

  async function buscarRastreio(rastreio: string) {
    navigate('/rastreio');

    setCodigoRastreio(rastreio);
  }

  return (
    <>
      <Helmet>
        <title>rastre.io</title>
      </Helmet>
      <div className="wrapper" data-theme={theme}>
        <Header />
        <div className="container">
          <h1>
            salv<strong>.</strong>
            <b>os</b>
          </h1>

          {!user ? (
            <h1>Você precisa estar logado para ver seus rastreios</h1>
          ) : (
            <>
              {!user ||
              !user.user_metadata.rastreios ||
              user.user_metadata.rastreios.length === 0 ? (
                <h1>Você não possui rastreios cadastrados</h1>
              ) : (
                <>
                  {!!user &&
                    !!user.user_metadata.rastreios &&
                    user.user_metadata.rastreios.map((rastreio: string) => (
                      <div className="container-rastreio" key={rastreio}>
                        <div
                          aria-hidden="true"
                          className="rastreio-info"
                          onClick={() => buscarRastreio(rastreio)}
                        >
                          <strong>{rastreio}</strong>
                        </div>
                      </div>
                    ))}
                </>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
}
