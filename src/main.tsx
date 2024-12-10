import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import MyApp from './MyApp.tsx';

import './styles.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MyApp />
  </StrictMode>
);
