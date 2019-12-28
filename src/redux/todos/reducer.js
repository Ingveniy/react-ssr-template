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

const initialState = {
  todos: [],
  loading: false,
  error: null
};

const todos = (state = initialState, action) => {
  switch (action) {
    case FETCH_GET_TODOS_REQUESTS:
    case FETCH_UPDATE_TODO_REQUESTS:
    case FETCH_ADD_TODO_REQUESTS:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_GET_TODOS_FAILURE:
    case FETCH_UPDATE_TODO_FAILURE:
    case FETCH_ADD_TODO_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case FETCH_GET_TODOS_SUCCESS:
    case FETCH_UPDATE_TODO_SUCCESS:
    case FETCH_ADD_TODO_SUCCESS:
      return {
        ...state,
        loading: false,
        todos: action.payload
      };

    default:
      return {
        ...state
      };
  }
};
export default todos;
