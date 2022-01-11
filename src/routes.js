import { Route, Routes } from 'react-router-dom';

import { Rastreio } from 'pages/Rastreio'

export function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Rastreio />} />
    </Routes>
  )
}