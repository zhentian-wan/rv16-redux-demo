const initState = {
    todos: []
};

export const updateCurrent = (val) => ({type: 'CURRENT_TODO', payload: val});

export default (state = initState, action) => {
    switch (action.type) {
        case 'TODO_ADD':
            return {...state, todos: state.todos.concat(action.payload)};
        case 'CURRENT_TODO':
            return {...state, currentTodo: action.payload};
        default:
            return state

    }
}