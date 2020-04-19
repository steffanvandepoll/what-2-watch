import {createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { Shows, ShowDetails } from './shows';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            shows: Shows,
            showDetails: ShowDetails
        }),
        applyMiddleware(thunk)
    );
    return store;
}
