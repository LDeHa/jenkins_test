import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the main page greeting', () => {
  render(<App />);
  const greeting = screen.getByText(/hello, world!/i);
  expect(greeting).toBeInTheDocument();
});
