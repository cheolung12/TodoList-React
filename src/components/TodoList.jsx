import React, { useEffect, useState } from "react";
import AddTodo from "./AddTodo";
import Todo from "./Todo";
import styles from '../css/TodoList.module.css';

export default function TodoList({ filter }) {
  const [todos, setTodos] = useState(() => readTodosFromLocalStorage());

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const handleUpdate = (updated) =>
    setTodos(todos.map((t) => (t.id === updated.id ? updated : t)));

  const handleDelete = (deleted) =>
    setTodos(todos.filter((t) => t.id !== deleted.id));

  const filtered = getFilteredItems(todos, filter);

  useEffect(() => {
    // todos를 JSON으로 변환해주는 후 todos 라는 키에 저장
    localStorage.setItem('todos', JSON.stringify(todos)); 
  }, [todos])

  function readTodosFromLocalStorage() {
    const todos = localStorage.getItem('todos');
    return todos ? JSON.parse(todos) : [];
  }

  return (
    <section className={styles.container}>
      <ul className={styles.list}>
        {filtered.map((item) => (
          <Todo
            key={item.id}
            todo={item}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </ul>
      <AddTodo add={addTodo} />
    </section>
  );
}

function getFilteredItems(todos, filter){
  if(filter === 'all'){
    return todos;
  }
  return todos.filter(todo=> todo.status === filter);
}