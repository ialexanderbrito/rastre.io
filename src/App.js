import { Toaster } from 'react-hot-toast';
import { BrowserRouter } from 'react-router-dom';

import { CepProvider } from 'context/Cep';
import { RastreamentoProvider } from 'context/Rastreamento';
import { ThemeProvider } from 'context/Theme';
import { MainRoutes } from 'routes';
import 'styles/global.scss';

export function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
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
      </ThemeProvider>
    </BrowserRouter>
  );
}
