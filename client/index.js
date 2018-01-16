import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import reducers from './components/Movies/reducers'

import App from './components/App';

// import todoApp from './toDo/reducers'
// import AppSec from './toDo/components/App'

let store = createStore(reducers);

console.log('lalla', store.getState());

ReactDOM.render(
    <Provider store={store}>
        <div>
            <App/>
            {/*<AppSec/>*/}
        </div>
    </Provider>,
    document.getElementById('root')
);