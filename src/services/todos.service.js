export const getTodos = async () => {
    return await fetch('http://localhost:9000/todos')
        .then((response) => response.json());
};