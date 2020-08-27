import React, {Fragment, useEffect} from 'react';
import SearchBar from './components/layout/SearchBar';
import Todos from './components/todos/Todos';
import AddBtn from './components/layout/AddBtn'
import AddTodoModal from './components/todos/AddTodoModal'
import EditTodoModal from './components/todos/EditTodoModal'
import AddUserModal from './components/users/AddUserModal'
import UserListModal from './components/users/UserListModal'


import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';

const App = () => {
  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  });
  return (
    <Fragment>
    <SearchBar/>
    <div className="container">
      <AddBtn/>
      <AddTodoModal/>
      <EditTodoModal/>
      <AddUserModal/>
      <UserListModal/>
      <Todos/>
    </div>
  </Fragment>
  );
};

export default App;
