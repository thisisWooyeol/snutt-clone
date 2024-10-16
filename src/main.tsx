import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { App } from './App';
import { EnvContext } from './context/EnvContext';

const root = document.getElementById('root');

if (root === null) throw new Error('Root element not found');

const ENV = {
  API_BASE_URL: import.meta.env.VITE_API_BASE_URL,
};

createRoot(root).render(
  <StrictMode>
    <EnvContext.Provider value={ENV}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </EnvContext.Provider>
  </StrictMode>,
);
