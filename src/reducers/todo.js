import {createTodo, getTodos, removeTodo, updateTodo} from '../services/todos.service';
import {showMessage} from './message';

export const TODO_ADD = 'TODO_ADD';
const CURRENT_TODO = 'CURRENT_TODO';
export const LOAD_TODOS = 'LOAD_TODOS';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const TODO_DELETED = 'TODO_DELETED';


const initState = {
    todo: {
        todos: [],
        currentTodo: ''
    }
};

export const updateCurrent = (val) => ({type: CURRENT_TODO, payload: val});
export const loadTodos = (todos) => ({type: LOAD_TODOS, payload: todos});
export const addTodo = (todo) => ({type: TODO_ADD, payload: todo});
const replaceTodo = (todo) => ({type: TOGGLE_TODO, payload: todo});
const todoDeleted = (id) => ({type: TODO_DELETED, payload: id});
export const saveTodo = (todo) => {
    return async (dispatch) => {
        dispatch(showMessage('saving todo...'));
        const res = await createTodo(todo);
        dispatch(addTodo(res));
    }
};
export const fetchTodos = () => {
    return async (dispatch) => {
        dispatch(showMessage('fetching todo...'));
        const todos = await getTodos();
        dispatch(loadTodos(todos));
    }
};
export const toggleTodo = (id) => {
    return async (dispatch, getState) => {
        dispatch(showMessage('updating todo...'));
        const {todos} = getState().todo;
        const todo = todos.find((t) => t.id === id);
        const toggled = {...todo, isComplete: !todo.isComplete};
        const res = await updateTodo(toggled);
        dispatch(replaceTodo(res));
    };
};

export const deleteTodo = (id) => {
    return async (dispatch) => {
        dispatch(showMessage('deleting todo...'));
        await removeTodo(id);
        dispatch(todoDeleted(id));
    }
};

export const getVisibleTodos = (todos, filter = '/') => {
  switch(filter) {
      case '/':
          return todos;
      case 'active':
          return todos.filter(t => !t.isComplete);
      case 'completed':
          return todos.filter(t => t.isComplete);
      default:
          return todos;
  }
};

export default (state = initState, action) => {
    switch (action.type) {
        case TODO_DELETED:
            return {...state, todos: state.todos.filter(t => action.payload !== t.id)};
        case TOGGLE_TODO:
            return {...state, todos: state.todos.map(t => t.id === action.payload.id ? action.payload: t)};
        case TODO_ADD:
            return {...state, currentTodo: '', todos: state.todos.concat(action.payload)};
        case LOAD_TODOS:
            return {...state, todos: action.payload};
        case CURRENT_TODO:
            return {...state, currentTodo: action.payload};
        default:
            return state

    }
}