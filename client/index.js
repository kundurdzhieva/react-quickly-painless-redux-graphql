import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { render } from 'react-dom'

import App from './components/App';

import todoApp from './toDo/reducers'
import AppSec from './toDo/components/App'

let store = createStore(todoApp)

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
ReactDOM.render(<App />, document.getElementById('root'));

////toDo
render(
    <Provider store={store}>
        <AppSec />
    </Provider>,
    document.getElementById('appSec')
)