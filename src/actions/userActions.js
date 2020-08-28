import {GET_USERS, ADD_USER, DELETE_USER, SET_LOADING, USERS_ERROR} from './types';

// Get users from server
export const getUsers = () => async dispatch => {
  try {
    setLoading();

    const res = await fetch('/users');
    const data = await res.json();

    dispatch({
      type: GET_USERS,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: USERS_ERROR,
      payload: err/Response.statusText
    });
  }
};

// Add users to server

export const addUser = (user) => async dispatch => {
  try {
    setLoading();

    const res = await fetch('/users', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {'Content-Type' : 'application/json'
    }
    });
    const data = await res.json();

    dispatch({
      type: ADD_USER,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: USERS_ERROR,
      payload: err/Response.statusText
    });
  }
};

// Delete User

export const deleteUser = (id) => async dispatch => {
  try {
    setLoading();

    await fetch(`/users/${id}`, {
      method: 'DELETE'
    });
    

    dispatch({
      type: DELETE_USER,
      payload: id
    });
  } catch (err) {
    dispatch({
      type: USERS_ERROR,
      payload: err/Response.statusText
    });
  }
};


// Set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING
  }
}