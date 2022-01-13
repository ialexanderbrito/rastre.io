import { Route, Routes } from 'react-router-dom';

import { Cep } from 'pages/Cep';
import { Rastreio } from 'pages/Rastreio';

export function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Rastreio />} />
      <Route path="/cep" element={<Cep />} />
    </Routes>
  );
}
