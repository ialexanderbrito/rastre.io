import { Toaster } from 'react-hot-toast';
import { BrowserRouter } from 'react-router-dom';

import { AuthProvider } from 'context/Auth';
import { CepProvider } from 'context/Cep';
import { RastreamentoProvider } from 'context/Rastreamento';
import { ThemeProvider } from 'context/Theme';
import { MainRoutes } from 'routes';
import 'styles/global.scss';

export function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <AuthProvider>
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
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}
