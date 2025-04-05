import '@testing-library/jest-dom';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import AddInput from '../AddInput';
import userEvent from '@testing-library/user-event';
import React from 'react';
const mockSetTodos = jest.fn();
beforeEach(() => {
  jest.clearAllMocks();
});
describe('Unit Tests for AddInput component - Component Behavior', () => {
  it('Should render the input field', () => {
    render(<AddInput todos={[]} setTodos={mockSetTodos} />);
    const text = 'Add a new task here...';
    const inputElement = screen.getByPlaceholderText(text);
    expect(inputElement).toBeInTheDocument();
  });

  it('Should render the Add button', () => {
    render(<AddInput todos={[]} setTodos={mockSetTodos} />);
    const btnElement = screen.getByRole('button', { name: 'Add' });
    expect(btnElement).toBeInTheDocument();
  });

  it('Should update state on user input', () => {
    render(<AddInput todos={[]} setTodos={mockSetTodos} />);
    const text = 'Add a new task here...';
    const inputElement = screen.getByPlaceholderText(text);
    expect(inputElement).toBeInTheDocument();
    fireEvent.change(inputElement, {
      target: { value: 'Go Grocerry Shopping' },
    });
    expect(inputElement.value).toBe('Go Grocerry Shopping');
  });

  it('Should reset input field after adding a todo', () => {
    render(<AddInput todos={[]} setTodos={mockSetTodos} />);
    const text = 'Add a new task here...';
    const inputElement = screen.getByPlaceholderText(text);
    expect(inputElement).toBeInTheDocument();
    fireEvent.change(inputElement, {
      target: { value: 'Go Grocerry Shopping' },
    });
    expect(inputElement.value).toBe('Go Grocerry Shopping');
    const buttonElement = screen.getByRole('button', { name: 'Add' });
    fireEvent.click(buttonElement);
    expect(inputElement.value).toBe('');
  });
});

describe('Functional Tests (Business Logic) for for AddInput component', () => {
  it('Should add a new todo with a unique ID', () => {
    render(<AddInput todos={[]} setTodos={mockSetTodos} />);
    const inputElement = screen.getByPlaceholderText('Add a new task here...');
    const buttonElement = screen.getByRole('button', { name: 'Add' });
    userEvent.type(inputElement, 'Go shopping');
    userEvent.click(buttonElement);
    expect(inputElement.value).toBe('');
    userEvent.type(inputElement, 'Go to the gym');
    userEvent.click(buttonElement);
    expect(inputElement.value).toBe('');

    // ✅ Ensure setTodos was called twice
    expect(mockSetTodos).toHaveBeenCalledTimes(2);
    // ✅ Check if setTodos received unique IDs
    const firstCallArgs = mockSetTodos.mock.calls[0][0];
    const secondCallArgs = mockSetTodos.mock.calls[1][0];
    expect(firstCallArgs[0].id).not.toBe(secondCallArgs[0].id);
  });

  it('Should not allow empty todos to be added', () => {
    render(<AddInput todos={[]} setTodos={mockSetTodos} />);
    const inputElement = screen.getByPlaceholderText('Add a new task here...');
    const buttonElement = screen.getByRole('button', { name: 'Add' });
    expect(inputElement.value).toBe('');
    userEvent.click(buttonElement);
    expect(mockSetTodos).toHaveBeenCalledTimes(0);
  });
  it('Should preserve existing todos when adding a new one', async () => {
    const prevTodos = [
      { task: 'Go grocerry shopping' },
      { task: 'Go to the gym' },
    ];
    render(<AddInput todos={prevTodos} setTodos={mockSetTodos} />);
    const inputElement = screen.getByPlaceholderText('Add a new task here...');
    const buttonElement = screen.getByRole('button', { name: 'Add' });

    await userEvent.type(inputElement, 'Buy grocerries');
    userEvent.click(buttonElement);

    await waitFor(() => {
      expect(mockSetTodos).toHaveBeenCalledTimes(1);
    });

    const updatedTodos = mockSetTodos.mock.calls[0][0];

    expect(updatedTodos).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ task: 'Go grocerry shopping' }),
        expect.objectContaining({ task: 'Go to the gym' }),
        expect.objectContaining({ task: 'Buy grocerries' }),
      ])
    );
  });
});
