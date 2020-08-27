import {GET_TODOS, SET_LOADING, TODOS_ERROR, ADD_TODO} from './types'

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
      payload: err/Response.data
    });
  }
};


//aDD NEW tODO

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
      payload: err/Response.data
    });
  }
};
// set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING
  }
}