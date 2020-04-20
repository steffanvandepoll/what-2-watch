import React from 'react';
import {
  render
} from '@testing-library/react';
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'

import Home from '../components/HomeComponent'
import { fullShowDataWithDuplicates } from './data/showData'

test('HomeComponent renders', () => {

  const shows = {
    shows: fullShowDataWithDuplicates
  }
  const history = createMemoryHistory()
  const { getByText } = render(<Router history={history}><Home shows={shows} /></Router>);
  const fantasyIsInHeaderOfComponents = getByText('Fantasy');
  expect(fantasyIsInHeaderOfComponents).toBeInTheDocument();
});
