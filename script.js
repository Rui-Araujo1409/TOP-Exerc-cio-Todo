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
  constructor(título, utilizador, descrição, dataTérmino, prioridade, estado, notas, tarefas) {
    this.título = título
    this.utilizador = utilizador;
  this.descrição = descrição;
  this.dataTérmino = dataTérmino;
  this.prioridade = prioridade;
    this.estado = estado;
  this.notas = notas;
    this.tarefas = tarefas;
  }
  
  alterarPrioridade(valor) {
    this.prioridade = valor;
  }
  
  alterarEstado() {
this.estado == "activo" ? this.estado = "inactivo" : this.estado = "activo";
  }
  
  alterarDataTérmino(data) {
    this.dataTérmino = data;
  }
  
  alterarTítulo(novoTítulo) {
    this.título = novoTítulo;
  }
  
  alterarDescriçao(novaDescrição) {
    this.descrição = novaDescrição;
  }
  
  alterarNotas(novaNotas) {
    this.notas = novaNotas;
  }
 
}

const tarefasTodo1 = new TarefasTodo();
const tarefasTodo2 = new TarefasTodo();
const listaTodosProjecto1 = new ListaTodos();


const projecto1 = new Projecto("Projecto 1", ["Rui Araújo", "Joaquim Araújo", "Ana Araújo"], listaTodosProjecto1);

const todo1 = new Todo("Todo 1", "Rui Araújo", "descrição", "13/12/2025", 1, "activo", "notas", tarefasTodo1);

const todo2 = new Todo("Todo 2", "Joaquim Araújo", "descrição", "data", 0, "inactivo", "notas", tarefasTodo2);


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
todo1.alterarPrioridade(2);
console.log(projecto1);
todo1.alterarEstado();
console.log(projecto1);

const dataFormatar = todo1.dataTérmino.split("/");
console.log(dataFormatar);
const dataObj = new Date(dataFormatar[2], dataFormatar[1]-1, dataFormatar[0]);
console.log(dataObj.getDate());
console.log(dataObj.getMonth()+1);
console.log(dataObj.getFullYear());





