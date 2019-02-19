import { createStore, combineReducers, compose } from 'redux';
import {registration} from "../reducer/mainReducer";
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    registration,
    form: formReducer
});

const initialState = { registration : {gender: "Male"} };

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers()
);

