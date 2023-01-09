import React from 'react';
import ReactDOM from 'react-dom';
import './org/index.css';
import {Dapp} from './components/Dapp.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Dapp />
  </React.StrictMode>
);
