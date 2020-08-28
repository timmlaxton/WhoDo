import {GET_TODOS, SET_LOADING, TODOS_ERROR, ADD_TODO, DELETE_TODO, SET_CURRENT, CLEAR_CURRENT, UPDATE_TODO, SEARCH_TODOS} from './types'

// export const getTodos = () => {
//   return async ( dispatch) => {
//     setLoading();

//     const res = await fetch('/todos');
//     const datat = await res.json();

//     dispatch({
//       type: GET_TODOS,
//       payload: data
//     });
//   };
// };

export const getTodos = () => async dispatch => {
  try {
    setLoading();

    const res = await fetch('/todos');
    const data = await res.json();

    dispatch({
      type: GET_TODOS,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: TODOS_ERROR,
      payload: err/Response.statusText
    });
  }
};


//Add New Todo

export const addTodo = (todo) => async dispatch => {
  try {
    setLoading();

    const res = await fetch('/todos', {
      method: 'POST',
      body: JSON.stringify(todo),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await res.json();

    dispatch({
      type: ADD_TODO,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: TODOS_ERROR,
      payload: err.response.statusText
    });
  }
};

// Delete Todos

export const deleteTodo = (id) => async dispatch => {
  try {
    setLoading();

    await fetch(`/todos/${id}`, {
      method: 'DELETE'
    });
    

    dispatch({
      type: DELETE_TODO,
      payload: id
    });
  } catch (err) {
    dispatch({
      type: TODOS_ERROR,
      payload: err.response.statusText
    });
  }
};

// update todo on server

export const updateTodo = (todo) => async dispatch => {
  try {
    setLoading();

    const res = await fetch(`/todos/${todo.id}`, {
      method: 'PUT', 
      body: JSON.stringify(todo),
      headers: {
        'Content-Type' : 'application/json'
      }
    });
    
    const data = await res.json()

    dispatch({
      type: UPDATE_TODO,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: TODOS_ERROR,
      payload: err.response.statusText
    });
  }
};

// Search Todos
export const searchTodos = (text) => async dispatch => {
  try {
    setLoading();

    const res = await fetch(`/todos?q=${text}`);
    const data = await res.json();

    dispatch({
      type: SEARCH_TODOS,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: TODOS_ERROR,
      payload: err/Response.statusText
    });
  }
};

// Set current todo

export const setCurrent = todo => {
  return {
    type: SET_CURRENT,
    payload: todo
  }
}
// clear current todo
export const clearCurrent = () => {
  return {
    type: CLEAR_CURRENT
    
  }
}

// set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING
  }
}