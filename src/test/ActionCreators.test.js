import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as Actions from '../redux/ActionCreators'
import * as ActionTypes from '../redux/ActionTypes';
import {baseUrl} from '../shared/urls.js'
import fetchMock from 'fetch-mock-jest'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('async actions', () => {
  afterEach(() => {
    fetchMock.restore()
  })

  it('creates ADD_SHOW_DETAILS when fetching shows has been done', () => {
    fetchMock.mock(baseUrl + "shows/1505", {
      body: { todos: ['do something'] },
      headers: { 'content-type': 'application/json' }
    })

    const expectedActions = [
      { type: ActionTypes.ADD_SHOW_DETAILS, body: { todos: ['do something'] } }
    ]
    const store = mockStore({ shows: [] })

    return store.dispatch(Actions.fetchShowDetails(1505)).then(() => {
      // return of async actions
      //expect(fetchMock).toHaveLastFetched(baseUrl + 'shows/1505', 'get')

      //TODO fetch mock not working correctly yet. 
    })
  })
})
