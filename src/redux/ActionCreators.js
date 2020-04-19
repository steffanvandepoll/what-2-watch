import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/urls';

//Fetching the full schedule
export const fetchShows = () => (dispatch) => {

    dispatch(showsLoading(true));

    return fetch(baseUrl + "schedule/full")
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
    .then(response => response.json())
    .then(shows => dispatch(addShows(shows)))
    .catch(error => dispatch(showsFailed(error.message)));
}

export const showsLoading = () => ({
    type: ActionTypes.SHOWS_LOADING
});

export const showsFailed = (errmess) => ({
    type: ActionTypes.SHOWS_FAILED,
    payload: errmess
});

export const addShows = (shows) => ({
    type: ActionTypes.ADD_SHOWS,
    payload: shows
});


//fetch a single show by id
export const fetchShowDetails = (id) => (dispatch) => {
    dispatch(showDetailsLoading(true));

    return fetch(baseUrl + "shows/" + id)
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
    .then(response => response.json())
    .then(show => dispatch(addShowDetails(show)))
    .catch(error => dispatch(showDetailsFailed(error.message)));
}

export const showDetailsLoading = () => ({
    type: ActionTypes.SHOW_DETAILS_LOADING
});

export const showDetailsFailed = (errmess) => ({
    type: ActionTypes.SHOW_DETAILS_FAILED,
    payload: errmess
});

export const addShowDetails = (showDetails) => ({
    type: ActionTypes.ADD_SHOW_DETAILS,
    payload: showDetails
});
