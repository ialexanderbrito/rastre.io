import { BiMoon, BiSun, BiLogOut } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

import logoImg from 'assets/logo.svg';
import { useAuth } from 'context/Auth';
import { useTheme } from 'context/Theme';

import './styles.scss';

export function Header() {
  const { switchTheme, theme } = useTheme();
  const { user, handleLogout } = useAuth();
  const navigate = useNavigate();

  function navigateToCep() {
    navigate('/cep');
  }

  function navigateToRastreio() {
    navigate('/rastreio');
  }

  function navigateToSalvos() {
    navigate('/salvos');
  }

  function verificarURL() {
    const url = window.location.pathname;

    if (url === '/rastreio') {
      return 'Rastreio';
    }

    return 'CEP';
  }

  return (
    <div className="header">
      <div className="container-left">
        <img
          aria-hidden="true"
          src={logoImg}
          alt="Logo"
          className="logo"
          onClick={
            !user
              ? () => window.location.replace('/')
              : () => window.location.replace('/rastreio')
          }
        />
        {verificarURL() === 'Rastreio' ? (
          <strong
            aria-hidden="true"
            onClick={() => {
              navigateToCep();
            }}
          >
            busca.cep
          </strong>
        ) : (
          <strong
            aria-hidden="true"
            onClick={() => {
              navigateToRastreio();
            }}
          >
            rastre.io
          </strong>
        )}
      </div>

      <div className="mode">
        <strong
          aria-hidden="true"
          onClick={() => {
            navigateToSalvos();
          }}
        >
          salvos
        </strong>
        <div
          aria-hidden="true"
          onClick={() => {
            switchTheme();
          }}
        >
          {theme === 'light' ? (
            <>
              <div className="icon">
                <BiMoon size={20} color="#1b1b1b" />
              </div>
            </>
          ) : (
            <>
              <div className="icon">
                <BiSun size={20} color="#D7D3CE" />
              </div>
            </>
          )}
        </div>
        {user && (
          <>
            <div
              aria-hidden="true"
              onClick={() => {
                handleLogout();
              }}
            >
              {theme === 'light' ? (
                <div className="icon">
                  <BiLogOut size={20} color="#1b1b1b" />
                </div>
              ) : (
                <div className="icon">
                  <BiLogOut size={20} color="#D7D3CE" />
                </div>
              )}
            </div>
            <img
              src={user.user_metadata.avatar_url}
              alt={user.user_metadata.full_name}
              className="avatar"
            />
          </>
        )}
      </div>
    </div>
  );
}
