import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Followers from '../Followers';
import { BrowserRouter } from 'react-router-dom';

const MockFollowerComponent = () => (
  <BrowserRouter>
    <Followers />
  </BrowserRouter>
);
describe('Unit Tests (Component Behavior)', () => {
  it('Should render the Header component with the correct title.', () => {
    render(<MockFollowerComponent />);
    const headingElement = screen.getByRole('heading', { name: /followers/i });
    // expect(headingElement).toBeInTheDocument();
    expect(headingElement).toHaveTextContent(/followers/i);
  });
});
