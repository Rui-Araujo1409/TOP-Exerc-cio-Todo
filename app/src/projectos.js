export default class Projectos {
  constructor(título, utilizadores, todos){
    this.título = título;
  this.utilizadores = [];
    this.todos = [];
  } 
  
  alterarTítuloProjecto(novoTítulo) {
    this.título = novoTítulo;
  }
  
    adicionarUtilizadorProjecto(utilizador) {this.utilizadores.push(utilizador);}
  
  retirarUtilizadorProjecto(utilizador) {
    let index = this.utilizadores.findIndex(elemento => elemento == utilizador);
  this.utilizadores.splice(index,1);
  }
  
  adicionarToDos(todo) { this.todos.push(todo); }
  
   retirarTodos(todo) {
    let index = this.todos.findIndex(elemento => elemento == todo);
  this.utilizadores.splice(index,1);
  }
  
}