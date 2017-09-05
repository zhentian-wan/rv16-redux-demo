
// @flow
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import todoReducer from './reducers/todo';
import messageReducer from './reducers/message';

const reducers = combineReducers(
    {
        message: messageReducer,
        todo: todoReducer
    }
);

export type TodoType = {
    id: number,
    name: string,
    isComplete: boolean
};

export type TodosStateType = {
    todos: Array<TodoType>,
    currentTodo: string
}

export type StateType = {
    todo: TodosStateType,
    message: string
};

const initState: StateType = {
    todo: {
        todos: [],
        currentTodo: ''
    },
    message: ''
};

const store = createStore(reducers, initState, composeWithDevTools(
    applyMiddleware(thunk)
));

export default store;
