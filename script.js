class Projecto {
  constructor(título, utilizadores, todos){
    this.título = título;
  this.utilizador = utilizadores;
    this.todos = todos;
  } 
}

class TarefasTodo {
  constructor(){
    this.tarefas = [];
  }
  
  adicionarTarefa(item) {this.tarefas.push(item)}
  
  retirarTarefa(item) {
    let index = this.tarefas.findIndex(elemento => elemento == item);
  this.tarefas.splice(index,1);
  }
}

class ListaTodos {
  constructor(){
    this.todos = [];
  }
  
  adicionarTodo(item) {this.todos.push(item)};
  retirarTodo(item){
    let index = this.todos.findIndex(elemento => elemento == item);
    this.todos.splice(index,1);
  }
}

class Todo {
  constructor(título, utilizador, descrição, dataTérmino, prioridade, activo, notas, tarefas) {
    this.título = título
    this.utilizador = utilizador;
  this.descrição = descrição;
  this.dataTérmino = dataTérmino;
  this.prioridade = prioridade;
    this.activo = activo;
  this.notas = notas;
    this.tarefas = tarefas;
  }
 
}

const tarefasTodo1 = new TarefasTodo();
const tarefasTodo2 = new TarefasTodo();
const listaTodosProjecto1 = new ListaTodos();


const projecto1 = new Projecto("Projecto 1", ["Rui Araújo", "Joaquim Araújo", "Ana Araújo"], listaTodosProjecto1);

const todo1 = new Todo("Todo 1", "Rui Araújo", "descrição", "data", 1, true, "notas", tarefasTodo1);

const todo2 = new Todo("Todo 2", "Joaquim Araújo", "descrição", "data", 0, false, "notas", tarefasTodo2);


console.log(projecto1);
console.log(todo1);
console.log(todo2);


tarefasTodo1.adicionarTarefa("tarefa1");
tarefasTodo1.adicionarTarefa("tarefa2");
tarefasTodo1.adicionarTarefa("tarefa3");
tarefasTodo1.adicionarTarefa("tarefa4");
console.log(tarefasTodo1);
tarefasTodo1.retirarTarefa("tarefa2");
console.log(tarefasTodo1);
console.log(todo1);

listaTodosProjecto1.adicionarTodo(todo1);
console.log(listaTodosProjecto1);
console.log(projecto1);
listaTodosProjecto1.adicionarTodo(todo2);
console.log(projecto1);
listaTodosProjecto1.retirarTodo(todo2);
console.log(projecto1);





