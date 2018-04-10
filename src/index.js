require('./style.css');
import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import States from './containers/states';
import { Provider } from 'react-redux';

ReactDOM.render(
    <Provider store={store}>
        <States player="X" />
    </Provider>,
    document.getElementById('root')
);
