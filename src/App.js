import { Toaster } from 'react-hot-toast';
import { BrowserRouter } from 'react-router-dom';

import { CepProvider } from 'context/Cep';
import { RastreamentoProvider } from 'context/Rastreamento';
import { MainRoutes } from 'routes';
import 'styles/global.scss';

export function App() {
  return (
    <BrowserRouter>
      <RastreamentoProvider>
        <CepProvider>
          <MainRoutes />
          <Toaster
            containerStyle={{
              top: 65,
            }}
          />
        </CepProvider>
      </RastreamentoProvider>
    </BrowserRouter>
  );
}
