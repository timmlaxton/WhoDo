import React, { Profiler } from 'react'
import Moment from 'react-moment'
import { connect} from 'react-redux';
import { deleteTodo, setCurrent  } from '../../actions/todoActions';
import PropTypes from 'prop-types'

import M from 'materialize-css/dist/js/materialize.min.js'


const TodoItem = ({todo, deleteTodo, setCurrent}) => {
  const onDelete = () => {
    deleteTodo(todo.id);
    M.toast({ html: 'Todo Has Been Deleted'});
  }


  return (
    <li className="collection-item">
    <div>
      <a href="#edit-todo-modal" className={`modal-trigger ${todo.attention ? 'red-text' : 'blue-text'
    }`}
    onClick={() => setCurrent(todo)}
    >
      {todo.message}
      </a>
      <br/>
      <span className='grey-text'>
        <span className='black-tect'>ID #{todo.id}</span> last updated by{' '}
        <span className='black-text'>{todo.user}</span> on <Moment format="MMMM Do YYYY, h:mm:ss a">{todo.date}</Moment>
      </span>
      <a href="#!" onClick={onDelete} className="secondary-content">
        <i className="material-icons grey-text">delete</i>
      </a>
    </div>
      
    </li>
  )
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  setCurrent: PropTypes.func.isRequired,
}

export default connect(null, {deleteTodo, setCurrent})(TodoItem);
