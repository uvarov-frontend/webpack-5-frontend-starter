import React from 'react';
import ReactDOM from 'react-dom';
import App from '@/react/App.jsx';

const AppSelector = document.querySelector('#react-app');

if (AppSelector) ReactDOM.render(<App />, AppSelector);
