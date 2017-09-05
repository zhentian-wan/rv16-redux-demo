export const getTodos = async () => {
    return await fetch('http://localhost:9000/todos')
        .then((response) => response.json());
};

export const createTodo = async (name) => {
    return await fetch('http://localhost:9000/todos', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name,
            isComplete: false
        })
    })
        .then((res) => res.json());
};

export const updateTodo = async (todo) => {
    return await fetch(`http://localhost:9000/todos/${todo.id}`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(todo)
    })
        .then((res) => res.json());
};