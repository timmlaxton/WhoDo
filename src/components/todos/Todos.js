import React, { useState, useEffect} from 'react'
import TodoItem from './TodoItem';
import PreLoader from '../layout/Preloader'

const Todos = () => {
const [todos, setTodos] = useState([]);
const [loading, setLoading] = useState(false);

useEffect(() => {
  getTodos();
  //eslint-diasble-next-line //
}, []);

const getTodos = async () => {
  setLoading(true);
  const res = await fetch('/todos');
  const data = await res.json();

  setTodos(data);
  setLoading(false);
}

if(loading){
  return <PreLoader/>
} 

  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4 className="center">Todos</h4>
      </li>
      {!loading && todos.length === 0 ? (
      <p className="center">No todos to show...</p>
      ) : (
        todos.map(todo => <TodoItem todo={todo} key={todo.id} /> )
      )}
    </ul>
  );
};

export default Todos;