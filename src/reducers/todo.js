import {getTodos} from '../services/todos.service';

const initState = {
    todos: [],
    currentTodo: ''
};

export const updateCurrent = (val) => ({type: 'CURRENT_TODO', payload: val});
export const loadTodos = (todos) => ({type: 'LOAD_TODOS', payload: todos});
export const fetchTodos = () => {
    return async (dispatch) => {
        const todos = await getTodos();
        dispatch(loadTodos(todos));
    }
};

export default (state = initState, action) => {
    switch (action.type) {
        case 'TODO_ADD':
            return {...state, todos: state.todos.concat(action.payload)};
        case 'LOAD_TODOS':
            return {...state, todos: action.payload};
        case 'CURRENT_TODO':
            return {...state, currentTodo: action.payload};
        default:
            return state

    }
}