
// @flow
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducer from './reducers/todo';

export type TodoType = {
    id: number,
    name: string,
    isComplete: boolean
};

export type StateType = {
    todos: Array<TodoType>,
    currentTodo: string
};

const initState: StateType = {
    todos: [],
    currentTodo: ''
};

const store = createStore(reducer, initState, composeWithDevTools(
    applyMiddleware(thunk)
));

export default store;
