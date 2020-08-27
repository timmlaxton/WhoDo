import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import TodoItem from './TodoItem';
import PreLoader from '../layout/Preloader'
import PropTypes from 'prop-types';
import {getTodos} from '../../actions/todoActions'

const Todos = ({ todo: {todos, loading }, getTodos}) => {


useEffect(() => {
  getTodos();
  //eslint-diasble-next-line //
}, []);


if(loading || todos === null){
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

Todos.propTypes = {
  todo: PropTypes.object.isRequired,
  getTodos: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  todo: state.todo
});

export default connect(mapStateToProps,  {getTodos})(Todos);