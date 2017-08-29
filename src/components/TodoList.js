import React from 'react'

const TodoItem = ({id, name, isComplete}) => (
    <li>
        <input type="checkbox" defaultChecked={isComplete} />
        {name}
    </li>
)

const TodoList =  (props) => (
    <div className="Todo-List">
        <ul>
            {props.todos.map(todo => <TodoItem key={todo.id} {...todo} />)}
        </ul>
    </div>
);

export default TodoList;