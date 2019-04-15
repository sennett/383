import React from 'react';
import { render } from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'

import rootReducer from './reducers/rootReducer';
import './index.css';
import App from './components/App';
import data from './data.js';

const initialState = {
    socialList: data.items
};

const middleWare = [ thunk, createLogger() ];

const store = createStore(rootReducer, initialState, applyMiddleware(...middleWare));

render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root')
);