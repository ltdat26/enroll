import { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {

  // State
  const [todos, setTodos] = useState([]);

  // Binding
  const todoText = useRef();

  // Lifecycle / Side Effects
  useEffect(() => {
    const existingTodos = localStorage.getItem('todos');
    setTodos(existingTodos ? JSON.parse(existingTodos) : []);
  }, []);

  // Event
  function addTodo(event) {
    event.preventDefault();
    const next = [...todos, todoText.current.value];
    setTodos(next);
    localStorage.setItem('todos', JSON.stringify(next));
  }

  return (
    <div className="App">
      <ul>
        {todos.map(todo => (<li key={todo}>{todo}</li>))}
      </ul>

      <form onSubmit={addTodo}>
        <input ref={todoText} />
        <input type='submit' value='Add' />
      </form>
    </div>
  );
}

export default App;
