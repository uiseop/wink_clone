import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import GlobalStyles from './styles/GlobalStyles';
import { Register } from './pages/Register';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <Register />
  </React.StrictMode>,
);
