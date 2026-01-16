export default class Projecto {
  constructor(título, utilizadores, todos){
    this.título = título;
    this.id = Math.floor(Math.random()*100+1);
  this.utilizador = [];
    this.todos = [];
  } 
  
  alterarTítuloProjecto(novoTítulo) {
    this.título = novoTítulo;
  }
  
    adicionarUtilizadorProjecto(utilizador) {this.utilizador.push(utilizador);}
  
  retirarUtilizadorProjecto(utilizador) {
    let index = this.utilizador.findIndex(elemento => elemento == utilizador);
  this.utilizador.splice(index,1);
  }
  
  adicionarToDos(todo) { this.todos.push(todo); }
  
   retirarTodos(todo) {
    let index = this.todos.findIndex(elemento => elemento == todo);
  this.utilizador.splice(index,1);
  }
  
}