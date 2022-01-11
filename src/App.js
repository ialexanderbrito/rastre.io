import { BrowserRouter } from 'react-router-dom';
import { MainRoutes } from 'routes';
import 'styles/global.scss';

export function App() {
  return (
    <BrowserRouter>
      <MainRoutes />
    </BrowserRouter>
  );
}