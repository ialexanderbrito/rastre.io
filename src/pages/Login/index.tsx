import { useEffect } from 'react';
import { Helmet } from 'react-helmet';

import logoGithub from 'assets/github-icon.svg';
import logoGoogle from 'assets/google-icon.svg';
import { useAuth } from 'context/Auth';
import { useTheme } from 'context/Theme';

import { Header } from 'components/Header';

import './styles.scss';

export function Login() {
  const {
    values,
    setValues,
    handleLoginSubmit,
    handlePageRegistrar,
    handleLoginGoogle,
    handleLoginGithub,
  } = useAuth();

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

          <div
            aria-hidden="true"
            className="github-btn"
            onClick={() => {
              handleLoginGithub();
            }}
          >
            <div className="github-icon-wrapper">
              <img className="github-icon" src={logoGithub} />
            </div>
            <p className="btn-text">
              <b>Fazer login com o Github</b>
            </p>
          </div>

          <div
            aria-hidden="true"
            className="google-btn"
            onClick={() => {
              handleLoginGoogle();
            }}
          >
            <div className="google-icon-wrapper">
              <img className="google-icon" src={logoGoogle} />
            </div>
            <p className="btn-text">
              <b>Fazer login com o Google</b>
            </p>
          </div>

          <div className="separator">ou </div>

          <form className="space" onSubmit={handleLoginSubmit}>
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
