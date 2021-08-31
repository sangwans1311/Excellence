
//  Adding a Vue instance  

    new Vue({
        el: '#app',
        
//  Adding Data to store the array of todo Data 

        data: {
            isEditing: false,
            todo: '',
            todos: [],
            selectedTodo: null
        },

//  Adding method  to display the todo

        methods: {
            storeTodo() {

// when someone clicks on the add button - takes values and push it into data array  

                this.todos.push(this.todo)
                this.todo = ''
            },

//  Adding method  to display the todo

            removeTodo(index) {
                this.todos.splice(index, 1)
            },

//  Adding method  to display the todo

            updateTodo() {
                this.todos.splice(this.selectedIndex, 1, this.todo)
                this.todo = ''
                this.isEditing = false
            },
            
//  Adding splice method of java script array (removes the old entered todo and stores the newly update todo)

            editTodo(index, todo) {
                this.isEditing = true
                this.todo = todo
                this.selectedIndex = index
            }
        }
    })
