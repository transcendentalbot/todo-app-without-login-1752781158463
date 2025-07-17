import React from 'react';
import TodoList from '@/components/TodoList';

const fetchTodos = async () => {
  const res = await fetch('/api/todos');
  const todos = await res.json();
  return todos;
};

const TodosPage: React.FC = async () => {
  const todos = await fetchTodos();

  return (
    <div className="max-w-3xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Todo List</h1>
      <TodoList todos={todos} />
    </div>
  );
};

export default TodosPage;