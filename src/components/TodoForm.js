import React from 'react'

const TodoForm = (props) => {
    const {currentTodo, handleInputChange} = props;
    return (
        <form>
            <input
                type="text"
                value={currentTodo}
                onChange={evt => handleInputChange(evt.target.value)}/>
        </form>
    )
};

export default TodoForm;