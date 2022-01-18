import { BiMoon, BiSun } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

import logoImg from 'assets/logo.svg';
import { useTheme } from 'context/Theme';

import './styles.scss';

export function Header() {
  const { switchTheme, theme } = useTheme();
  const navigate = useNavigate();

  function navigateToCep() {
    navigate('/cep');
  }

  function navigateToRastreio() {
    navigate('/');
  }

  function verificarURL() {
    const url = window.location.pathname;

    if (url === '/cep') {
      return 'CEP';
    }

    return 'Rastreio';
  }

  return (
    <div className="header">
      <img
        aria-hidden="true"
        src={logoImg}
        alt="Logo"
        className="logo"
        onClick={() => window.location.replace('/')}
      />
      <div className="mode">
        {verificarURL() === 'CEP' ? (
          <strong
            aria-hidden="true"
            onClick={() => {
              navigateToRastreio();
            }}
          >
            rastre.io
          </strong>
        ) : (
          <strong
            aria-hidden="true"
            onClick={() => {
              navigateToCep();
            }}
          >
            busca.cep
          </strong>
        )}
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
      </div>
    </div>
  );
}
