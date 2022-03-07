import { useEffect } from 'react';
import { Helmet } from 'react-helmet';

import { useAuth } from 'context/Auth';
import { useTheme } from 'context/Theme';

import { Header } from 'components/Header';

import './styles.scss';

export function Registrar() {
  const { handleRegisterSubmit, values, setValues, handlePageLogin } =
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
            registr<strong>.</strong>
            <b>ar</b>
          </h1>
          <form onSubmit={handleRegisterSubmit}>
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

              <input
                type="password"
                className="input-login"
                value={values.passwordConfirm}
                onChange={(e) =>
                  setValues({ ...values, passwordConfirm: e.target.value })
                }
                placeholder="Digite sua senha novamente"
              />
              <button className="button-login" type="submit">
                cadastrar
              </button>
            </div>
          </form>

          <p>
            Já tem uma conta?{' '}
            <strong
              aria-hidden="true"
              onClick={() => {
                handlePageLogin();
              }}
            >
              Entrar
            </strong>
          </p>
        </div>
      </div>
    </>
  );
}
