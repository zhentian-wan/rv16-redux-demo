// @flow
import React from 'react'
import {connect} from 'react-redux';
import {updateCurrent} from '../reducers/todo';

type TodoFormType = {
    currentTodo: string,
    updateCurrent: Function
};

const TodoForm = (props: TodoFormType) => {
    const {currentTodo, updateCurrent} = props;
    return (
        <form>
            <input
                type="text"
                value={currentTodo}
                onChange={evt => updateCurrent(evt.target.value)}/>
        </form>
    )
};

export default connect(
    (state) => ({currentTodo: state.currentTodo}),
    {updateCurrent}
)(TodoForm);