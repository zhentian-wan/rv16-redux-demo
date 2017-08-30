import React from 'react'
import {connect} from 'react-redux';
import {updateCurrent} from '../reducers/todo';

const TodoForm = (props) => {
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