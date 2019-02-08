import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider } from 'react-redux';
import { store } from "./store/store";


const Root = () => (
    <Provider store={store}>
        <App/>
    </Provider>
);


ReactDOM.render(<Root/>, document.getElementById('root'));
serviceWorker.unregister();
