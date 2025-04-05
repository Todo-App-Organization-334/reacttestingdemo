import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Todo from '../Todo';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
const MockTodo = () => (
  <BrowserRouter>
    <Todo />
  </BrowserRouter>
);
describe('Integration Tests (Component Interaction)', () => {
  it('Should interact correctly with TodoList (newly added todos should be visible)', () => {
    render(<MockTodo />);
    const inputElement = screen.getByPlaceholderText('Add a new task here...');
    const buttonElement = screen.getByRole('button', { name: 'Add' });
    expect(inputElement.value).toBe('');
    userEvent.type(inputElement, 'Grocerry shopping');
    expect(inputElement.value).toBe('Grocerry shopping');
    userEvent.click(buttonElement);
    const divElement = screen.getByTestId('task-container');
    expect(divElement.textContent).toContain('Grocerry shopping');
  });
});
