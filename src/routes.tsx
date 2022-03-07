import { Route, Routes } from 'react-router-dom';

import { Cep } from 'pages/Cep';
import { Login } from 'pages/Login';
import { Rastreio } from 'pages/Rastreio';
import { Registrar } from 'pages/Registrar';
import { Salvos } from 'pages/Salvos';

export function MainRoutes() {
  return (
    <Routes>
      <Route path="/rastreio" element={<Rastreio />} />
      <Route path="/cep" element={<Cep />} />
      <Route path="/" element={<Login />} />
      <Route path="/registrar" element={<Registrar />} />
      <Route path="/salvos" element={<Salvos />} />
    </Routes>
  );
}
