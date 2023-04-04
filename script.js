const vm = Vue.createApp({
  data() {
      return {
          todo: "",
          todoList: [],
          index:'',
          count:0,
          mode:0,
          key:'',
      }
  },
  methods: {
      ajouter() {
          this.todoList.push({ id: this.count++, list: this.todo });
          this.todo = '';
          
      },
      supp(index){
          console.log(index);
          this.todoList.splice(index,1);
      },
      modif(index){
          this.todo=this.todoList[index].list;
          this.mode=1;
          this.key=index;
          document.getElementById("entrer").style.backgroundColor="red";
          document.getElementById("entrer").style.color="yellow";
      },
      valider(){
          this.todoList.splice(this.key,1,{ id: this.key, list: this.todo });
          this.key='';
          this.mode=0;
          this.todo='';
          document.getElementById("entrer").style.backgroundColor="white";
          document.getElementById("entrer").style.color="black";
      }

  }
})
vm.mount('#app')