import { useNavigate } from 'react-router-dom';

import logoImg from 'assets/logo.svg';

import './styles.scss';

export function Header() {
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
    </div>
  );
}
