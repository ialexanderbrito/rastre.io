import { useEffect } from 'react';
import { Helmet } from 'react-helmet';

import { Header } from 'components/Header';

import { useAuth } from 'context/Auth';
import { useTheme } from 'context/Theme';

import './styles.scss';

export function Login() {
  const { values, setValues, handleLoginSubmit, handlePageRegistrar } =
    useAuth();

  const { theme } = useTheme();

  useEffect(() => {
    setValues({
      username: '',
      password: '',
      passwordConfirm: '',
    });
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
            log<strong>.</strong>
            <b>in</b>
          </h1>
          <form onSubmit={handleLoginSubmit}>
            <div className="container-login">
              <input
                type="email"
                className="input-login"
                value={values.username}
                onChange={(e) =>
                  setValues({ ...values, username: e.target.value })
                }
                placeholder="Digite seu email"
              />
              <input
                type="password"
                className="input-login"
                value={values.password}
                onChange={(e) =>
                  setValues({ ...values, password: e.target.value })
                }
                placeholder="Digite sua senha"
              />
              <button className="button-login" type="submit">
                entrar
              </button>
            </div>
          </form>

          <p>
            É novo por aqui?{' '}
            <strong
              aria-hidden="true"
              onClick={() => {
                handlePageRegistrar();
              }}
            >
              Criar uma conta
            </strong>
          </p>
        </div>
      </div>
    </>
  );
}
