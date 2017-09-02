
// @flow
import {createStore} from 'redux';
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
    todos: [
        {id: 1, name: 'Render static UI', isComplete: true},
        {id: 2, name: 'Create initial state', isComplete: false},
        {id: 3, name: 'Render based on state', isComplete: true}
    ],
    currentTodo: 'Temp'
};

const store = createStore(reducer, initState);

export default store;
