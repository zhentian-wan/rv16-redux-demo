const baseUrl = process.env.REACT_APP_BASE_URL;

export const getTodos = async () => {
    return await fetch(baseUrl)
        .then((response) => response.json());
};

export const createTodo = async (name) => {
    return await fetch(baseUrl, {
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
    return await fetch(`${baseUrl}/${todo.id}`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(todo)
    })
        .then((res) => res.json());
};


export const removeTodo = async (id) => {
    return await fetch(`${baseUrl}/${id}`, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });
};