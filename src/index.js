import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import rootReducer from './reducers'
import * as serviceWorker from './serviceWorker';
import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk'
import i18n from "i18next";
import { reactI18nextModule } from "react-i18next";
import XHR from 'i18next-xhr-backend';

const backend = {
  //debug: true,
  interpolation: {
    escapeValue: false
  },
  lng: "en",
  fallbackLng: "en",
  loadPath: '/locales/{{lng}}/{{ns}}.json',
}

i18n
  .use(XHR)
  .use(reactI18nextModule) // passes i18n down to react-i18next
  .init(backend);

const store = createStore(
    rootReducer,
    applyMiddleware(thunkMiddleware, logger)
);

ReactDOM.render(
    <Provider store={store}><App/></Provider>, 
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
