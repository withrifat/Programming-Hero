const loadTodo = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then((res) => res.json())
    .then((data) => {
        displayTodo(data); // pass the data here
    })
}

const displayTodo = (todos) => {
    // get the container
    const todoContainer = document.getElementById('todoContainer');
    todoContainer.innerHTML = '';

    // loop every todo
    todos.forEach((todo) => {
        console.log(todo);

        const todoCard = document.createElement('div');
        todoCard.innerHTML = `
            <div class="todo-card">
                <p>${todo.completed == true ? "complete": "not complete"} <i> class ="fa-regular fa-square-check"></i> </p>
                <h4>${todo.title}</h4>
            </div>
        `;
        todoContainer.append(todoCard);
    })
}

// Call loadTodo to fetch and display todos
loadTodo();
