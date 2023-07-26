import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from '@pages/Home';
import GlobalStyles from '@styles/GlobalStyles';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NotFound } from '@pages/NotFound';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
