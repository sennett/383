import React from 'react';
import { render } from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './reducers/rootReducer';
import './index.css';
import App from './components/App';
import data from './data.js';

const initialState = {
    filter: 'All',
    socialList: data.items,
    loading: false
};

const store = createStore(rootReducer, initialState);

render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root')
);