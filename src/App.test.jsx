import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders navigation link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Porządki/i);
  expect(linkElement).toBeInTheDocument();
});
