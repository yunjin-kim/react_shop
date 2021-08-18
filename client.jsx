import React from 'react';
import ReactDom from 'react-dom';
import App from './App';

import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
let store = createStore(()=>{ return [{ id: 0, name: '쏟아지는 은하수', quan: 2 }] })

ReactDom.render(
  <BrowserRouter>
    <Provider store={store}>
      < App />
    </Provider>
  </BrowserRouter>,
  document.querySelector('#root')
)