import {createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { Shows, ShowDetails, Search } from './shows';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            shows: Shows,
            showDetails: ShowDetails,
            foundShows: Search
        }),
        applyMiddleware(thunk)
    );
    return store;
}
