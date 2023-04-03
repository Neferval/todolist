const app = Vue.createApp({
    data() {
      return {
        todos: [],
        newTodo: ''
      }
    },
    methods: {
      addTodo() {
        if (this.newTodo !== '') {
          this.todos.push(this.newTodo);
          this.newTodo = '';
        }
      },
      removeTodo(index) {
        this.todos.splice(index, 1);
      }
    }
  });
  
  app.mount('#app');
  