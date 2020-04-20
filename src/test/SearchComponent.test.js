import React from 'react';
import {
  render
} from '@testing-library/react';
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'

import Search from '../components/SearchComponent'
import { searchResultForArrow } from './data/showData'


const searchShows = (value) => {
  console.log("searching for: " + value);
}

test('Search value shows in heading', () => {
  const history = createMemoryHistory()
  const { getByText } = render(<Router history={history}><Search searchValue="Arrow" shows={searchResultForArrow} searchShows={searchShows}/></Router>);
  const searchValueIsinHeader = getByText('Results for \'Arrow\'');
  expect(searchValueIsinHeader).toBeInTheDocument();
});
