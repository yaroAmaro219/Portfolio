import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('presents Artemie as an Analytics Manager and founder', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  expect(screen.getByText(/Analytics Manager · Product Builder · Founder/i)).toBeInTheDocument();
  expect(screen.getAllByText(/Momentum Analytics/i).length).toBeGreaterThan(0);
});
