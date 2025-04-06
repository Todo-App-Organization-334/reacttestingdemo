import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import TodoList from '../TodoList';
import React, { useState } from 'react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';

describe('Testing TodoList component', () => {
  const MockTodo = () => {
    const [todos, setTodos] = useState([
      { id: 1, task: 'Task 1', completed: false },
      { id: 2, task: 'Task 2', completed: false },
    ]);

    return (
      <BrowserRouter>
        <TodoList todos={todos} setTodos={setTodos} />
      </BrowserRouter>
    );
  };

  test('renders todos correctly', () => {
    render(<MockTodo />);
    expect(screen.getByText('Task 1')).toBeInTheDocument();
    expect(screen.getByText('Task 2')).toBeInTheDocument();
  });

  test('task completion when task is clicked', async () => {
    render(<MockTodo />);

    const task1 = screen.getByText('Task 1');
    fireEvent.click(task1);

    await waitFor(() => {
      expect(task1).toHaveClass('todo-item-active');
    });

    const task2 = screen.getByText('Task 2');
    fireEvent.click(task2);

    await waitFor(() => {
      expect(task2).toHaveClass('todo-item-active');
    });
  });

  // test('task completion updates UI correctly', async () => {
  //   render(<MockTodo />);

  //   const tasks = screen.getAllByTestId('task-container');
  //   expect(tasks[0]).toBeInTheDocument();

  //   fireEvent.click(tasks[0]);

  //   await waitFor(() => {
  //     expect(tasks[0]).toHaveClass('todo-item-active');
  //   });
  // });

  // test('clicking a completed task marks it as incomplete', async () => {
  //   render(<MockTodo />);

  //   const task1 = screen.getByText('Task 1');

  //   fireEvent.click(task1);

  //   await waitFor(() => {
  //     expect(task1).toHaveClass('todo-item-active');
  //   });

  //   fireEvent.click(task1);

  //   await waitFor(() => {
  //     expect(task1).not.toHaveClass('todo-item-active');
  //   });
  // });
});
