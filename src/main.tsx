// === REACT DOM === //
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

// === COMPONENTS === //
import App from './components/App/App';

// === STYLES === //
import './styles/index.scss';
import './styles/index.tailwind.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
