// @flow
import React, {Component} from 'react'
import {connect} from 'react-redux';
import type {TodoType} from '../store';
import {fetchTodos} from '../reducers/todo';


const TodoItem = ({id, name, isComplete}: TodoType) => (
    <li>
        <input type="checkbox" defaultChecked={isComplete} />
        {name}
    </li>
)

class TodoList extends Component {
    componentDidMount() {
        this.props.fetchTodos();
    }

    render(){
        return (
            <div className="Todo-List">
                <ul>
                    {this.props.todos.map(todo => <TodoItem key={todo.id} {...todo} />)}
                </ul>
            </div>
        )
    }
}

export default connect(
    (state) => ({todos: state.todos}),
    {fetchTodos}
)(TodoList);