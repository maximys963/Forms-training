import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { store } from "./store/store";


const Root = () => (
    <Provider store={store}>
        <Router>
            <Switch>
                <Route path='/' component={App}/>
            </Switch>
        </Router>
    </Provider>
);


ReactDOM.render(<Root/>, document.getElementById('root'));
serviceWorker.unregister();
