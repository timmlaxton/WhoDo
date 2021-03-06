import React, {useState} from 'react';
import UserSelectOptions from '../users/UserSelectOptions'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {addTodo} from '../../actions/todoActions';
import M from 'materialize-css/dist/js/materialize.min.js';

export const AddTodoModal = ({addTodo}) => {
  const [message, setMessage] = useState('');
  const [attention, setAttention] = useState(false)
  const [user, setUser] = useState('');

  const onSubmit = () => {
    if(message === '' || user === '') {
      M.toast({html: 'Please enter a todo and user'});
    } else {
      const newTodo = {
        message,
        attention,
        user,
        date: new Date()
      }

      addTodo(newTodo);

      M.toast({ html: `Todo added by ${user}`})
        // Clear Fields //
    setMessage('');
    setUser('');
    setAttention(false);
    };
  }

  return (
    <div id='add-todo-modal' className='modal' style={modalStyle}>
      <div className='modal-content'>
        <h4>Add todo</h4>
        <div className='row'>
          <div className='input-field'>
            <input 
            type='text'
            name='message' 
            value={message} 
            onChange={e => setMessage(e.target.value)}
            />
            <label htmlFor="message"className='active'>
             What needs done?
            </label>
          </div>
        </div>

        <div className='row'>
          <div className='input-field'>
           <select 
           name='user' 
           value={user} 
           className='browser-default'
           onChange={e => setUser(e.target.value)}
           >
             <option value="" disabled>
             Select user
             </option>
             <UserSelectOptions/>
           </select>
          </div>
        </div>
        <div className='row'>
        <div className='input-field'>
          <p>
            <label>
              <input 
              type='checkbox' 
              className='filled-in' 
              checked={attention} 
              value={attention} 
              onChange={e => setAttention(!attention)}
              />
              <span>Needs Attention</span>
            </label>
          </p>
        </div>
        </div>
      </div>
      <div className='modal-footer'>
        <a 
        href="#!" 
        onClick={onSubmit} 
        className="modal-close waves-effect blue waves-light btn"
        >
          Enter
          </a>
      </div>
    </div>
  )
}

AddTodoModal.propTypes = {
  addTodo: PropTypes.func.isRequired
}

const modalStyle = {
  width: '75%',
  height: '75%'
};

export default connect(null, {addTodo})(AddTodoModal);