import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import {createStore, applyMiddleware} from "redux"
import store from './reducers/index'

// const initialState = {
//   panel: null 
// }

// const store = createStore(reducers, initialState, composeWithDevTools(applyMiddleware(thunk)));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}> 
     <App /> 
  </Provider>
);