import React from 'react';
import {
  render
} from '@testing-library/react';
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import ShowCard from '../components/ShowCardComponent'
import { show } from './data/showData'

test('renders a card component', () => {
  const history = createMemoryHistory()
  const { getByText } = render(<Router history={history}><ShowCard show={show}/ ></Router>);
  const linkElement = getByText('One Piece');
  expect(linkElement).toBeInTheDocument();
});
