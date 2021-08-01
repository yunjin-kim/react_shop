import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {BrowerRouter} from 'react-router-dom';

ReactDOM.render(
  <BrowerRouter>
    <App />,
  </BrowerRouter>,
  document.getElementById('root')
);
