import React, { useState } from 'react';
import AddInput from '../AddInput/AddInput';
import Header from '../Header/Header';
import TodoList from '../TodoList/TodoList';
import './Todo.css';

function Todo() {
  const [todos, setTodos] = useState([]);

  return (
    <div className="todo">
      <Header title="TODO LIST From Parent Feature" />
      <Header title="TODO LISTTTTTTT From Parent Feature" />

      <AddInput setTodos={setTodos} todos={todos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default Todo;
