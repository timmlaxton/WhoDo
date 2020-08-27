import React from 'react'

export const AddBtn = () => {
  return (
    <div className="fixed-action-btn">
      <a href="#add-todo-modal" className="btn-floating btn-large btn darken-2 modal-trigger">
        <i className="small material-icons">add</i>
      </a>
      <ul>
        <li>
          <a href="#user-list-modal" className="btn-floating green modal-trigger">
            <i className="material-icons">person</i>
          </a>
        </li>
        <li>
          <a href="#add-user-modal" className="btn-floating red modal-trigger">
            <i className="material-icons">person_add</i>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default AddBtn;