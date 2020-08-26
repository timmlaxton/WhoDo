import React from 'react'
import Moment from 'react-moment'
import PropTypes from 'prop-types'


const TodoItem = ({todo}) => {
  return (
    <li className="collection-item">
    <div>
      <a href="#edit-todo-model" className={`modal-trigger ${todo.attention ? 'red-text' : 'blue-text'
    }`}
    >
      {todo.message}
      </a>
      <br/>
      <span className='grey-text'>
        <span className='black-tect'>ID #{todo.id}</span> last updated by{' '}
        <span className='black-text'>{todo.user}</span> on <Moment format="MMMM Do YYYY, h:mm:ss a">{todo.date}</Moment>
      </span>
      <a href="#" className="secondary-content">
        <i className="material-icons grey-text">delete</i>
      </a>
    </div>
      
    </li>
  )
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}

export default TodoItem
