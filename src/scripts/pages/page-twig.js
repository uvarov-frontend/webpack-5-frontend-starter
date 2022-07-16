import React from 'react';
import { createRoot } from 'react-dom/client';
import App from '@/react/App.jsx';

const AppSelector = document.querySelector('#react-app');

if (AppSelector) createRoot(AppSelector).render(<App />);
