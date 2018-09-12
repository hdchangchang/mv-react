import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom' 

import App from './App';
import registerServiceWorker from './registerServiceWorker';

import './style/common.scss'
import './media/svg/index.js'

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
)

registerServiceWorker();
