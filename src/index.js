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

i18n
  .use(reactI18nextModule) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: {
          "Item selection" : "Item selection",
          "Name": "Name",
          "Date": "Date",
          "Action": "Action",
        }
      },
      fr: {
        translation: {
          'Item selection' : "Sélection d'un élément",
          'Name': 'Nom',
          "Date": 'Date',
          'Action': 'Action',
        }
      }
    },
    lng: "en",
    fallbackLng: "en",
    
    interpolation: {
      escapeValue: false
    }
  });

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
