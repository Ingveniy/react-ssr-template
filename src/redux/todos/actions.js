import {
  FETCH_GET_TODOS_REQUESTS,
  FETCH_GET_TODOS_SUCCESS,
  FETCH_GET_TODOS_FAILURE,
  FETCH_ADD_TODO_REQUESTS,
  FETCH_ADD_TODO_SUCCESS,
  FETCH_ADD_TODO_FAILURE,
  FETCH_UPDATE_TODO_REQUESTS,
  FETCH_UPDATE_TODO_SUCCESS,
  FETCH_UPDATE_TODO_FAILURE
} from './types';

const getTodosRequest = () => {
  return { type: FETCH_GET_TODOS_REQUESTS };
};
const getTodosSuccess = todos => {
  return { type: FETCH_GET_TODOS_SUCCESS, payload: todos };
};
const getTodosFailure = err => {
  return { type: FETCH_GET_TODOS_FAILURE, payload: err };
};

const getTodos = () => () => dispatch => {};

export { getTodos };
