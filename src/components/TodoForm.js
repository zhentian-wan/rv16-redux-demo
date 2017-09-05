// @flow
import React, {Component} from 'react'
import {connect} from 'react-redux';
import {updateCurrent, saveTodo} from '../reducers/todo';

export class TodoForm extends Component {

    handleInputChange = (evt) => {
        this.props.updateCurrent(evt.target.value)
    };

    handleSubmit = (evt) => {
        evt.preventDefault();
        this.props.saveTodo(this.props.currentTodo);
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    value={this.props.currentTodo}
                    onChange={this.handleInputChange}/>
            </form>
        )
    }
}

export default connect(
    (state) => ({currentTodo: state.todo.currentTodo}),
    {updateCurrent, saveTodo}
)(TodoForm);