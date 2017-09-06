// @flow
import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import type {TodoType} from '../store';
import {fetchTodos, toggleTodo, deleteTodo, getVisibleTodos} from '../reducers/todo';


const TodoItem = ({id, name, isComplete, toggleTodo, deleteTodo}: TodoType) => (
    <li>
        <span className="delete-item">
            <button onClick={() => deleteTodo(id)}>X</button>
        </span>
        <input
            type="checkbox"
            onChange={() => toggleTodo(id)}
            checked={isComplete} />
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
                    {this.props.todos.map(
                        todo => <TodoItem
                                    key={todo.id}
                                    deleteTodo={this.props.deleteTodo}
                                    toggleTodo={this.props.toggleTodo}
                                    {...todo} />)}
                </ul>
            </div>
        )
    }
}

export default withRouter(connect(
    (state, {match}) => ({todos: getVisibleTodos(state.todo.todos, match.params.filter)}),
    {fetchTodos, toggleTodo, deleteTodo}
)(TodoList));