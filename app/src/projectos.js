export default class Projecto {
  constructor(título, utilizadores, todos) {
    this.título = título;
    this.id = Math.floor(Math.random() * 100 + 1);
    this.utilizadores = utilizadores;
    this.todos = [];
  }

  alterarTítuloProjecto(novoTítulo) {
    this.título = novoTítulo;
  }

  adicionarUtilizadorProjecto(utilizador) { this.utilizadores = utilizador; }

  retirarUtilizadorProjecto(utilizador) {
    let index = this.utilizadores.findIndex(elemento => elemento == utilizador);
    this.utilizadores.splice(index, 1);
  }

  adicionarToDos(todo) { this.todos.push(todo); }

  retirarTodos(id) {
    const index = this.todos.findIndex((e) => e.id == id);
    if (index != -1) {
      this.todos.splice(index, 1);
    }
  }

  limparToDos() {
    this.todos = [];
  }

}