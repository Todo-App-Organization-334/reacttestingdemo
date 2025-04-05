import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Banner from '../Banner';

test('renders Banner component', () => {
  render(<Banner />);
  expect(screen.getByTestId('banner')).toBeInTheDocument(); // Modify based on actual content
});
