import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import Routes from './components/routes'

const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <Routes />
  </StrictMode>
);