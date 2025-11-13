class Projecto {
  constructor(título, utilizadores, todos){
    this.título = título;
  this.utilizador = utilizadores;
  }
  
}

class ListaTarefasTodo {
  constructor(tarefas){
    this.tarefas = tarefas;
  }
}

class Todo extends Projecto {
  constructor(título, utilizador, descrição, dataTérmino, prioridade, notas, tarefas) {
    super(título, utilizador);
  this.descrição = descrição;
  this.dataTérmino = dataTérmino;
  this.prioridade = prioridade;
  this.notas = notas;
    this.tarefas = tarefas;
  }
 
}

const projecto1 = new Projecto("Projecto 1", ["Rui Araújo", "Joaquim Araújo", "Ana Araújo"], []);

const todo1 = new Todo("Todo 1", "Rui Araújo", "descrição", "data", 1, "notas", []);

const todo2 = new Todo("Todo 2", "Joaquim Araújo", "descrição", "data", 1, "notas", []);

const listaTarefasTodo1 = new ListaTarefasTodo(["tarefa1", "tarefa2", "tarefa3"]);


console.log(projecto1);
console.log(todo1);
console.log(todo2);

todo1.tarefas = listaTarefasTodo1;
console.log(todo1.tarefas.tarefas[0]);

const obj1 = {
  título: projecto1.título,
  utilizador: projecto1.utilizador,
  todos: todo1
}

console.log(obj1);
