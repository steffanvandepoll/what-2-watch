import * as ActionTypes from './ActionTypes';

export const Shows = (state = { isLoading: true, errMess: null, shows:[]}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_SHOWS:
            return {...state, isLoading: false, errMess: null, shows: action.payload};

        case ActionTypes.SHOWS_LOADING:
            return {...state, isLoading: true, errMess: null, shows: []}

        case ActionTypes.SHOWS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};
        default:
            return state;
    }
};

export const ShowDetails= (state = { isLoading: true, errMess: null, showDetails: null}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_SHOW_DETAILS:
            return {...state, isLoading: false, errMess: null, showDetails: action.payload};

        case ActionTypes.SHOW_DETAILS_LOADING:
            return {...state, isLoading: true, errMess: null, showDetails: []}

        case ActionTypes.SHOW_DETAILS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};
        default:
            return state;
    }
};
