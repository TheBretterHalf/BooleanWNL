var todolist = {
    todos:[],
    displayTodos:function() {
        console.log('My Todos', this.todos);
    },
    addTodo: function(todoText){
        this.todos.push({
            todoText: todoText,
            completed: false
        });
        this.displayTodos();
    }
}