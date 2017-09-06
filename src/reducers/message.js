import {
    TODO_ADD,
    LOAD_TODOS,
    TOGGLE_TODO, TODO_DELETED,
} from './todo';

const MESSAGE_SHOW = 'MESSAGE_SHOW';

export const showMessage = (message) => ({
    type: MESSAGE_SHOW,
    payload: message
});

export default (state = '', action) => {
    switch (action.type) {
        case MESSAGE_SHOW:
            return action.payload;
        case TODO_ADD:
        case TOGGLE_TODO:
        case LOAD_TODOS:
        case TODO_DELETED:
            return '';
        default:
            return state;
    }
}