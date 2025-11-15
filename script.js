class Projecto {
  constructor(título, utilizadores){
    this.título = título;
  this.utilizador = utilizadores;
    this.todos = [];
  }
  
  adicionarTodo(todo) {this.todos.push(todo)}
  
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

class Todo extends Projecto {
  constructor(título, utilizador, descrição, dataTérmino, prioridade, activo, notas, tarefas) {
    super(título, utilizador);
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


const projecto1 = new Projecto("Projecto 1", ["Rui Araújo", "Joaquim Araújo", "Ana Araújo"]);

const todo1 = new Todo("Todo 1", "Rui Araújo", "descrição", "data", 1, true, "notas", tarefasTodo1);

const todo2 = new Todo("Todo 2", "Joaquim Araújo", "descrição", "data", 0, false, "notas", tarefasTodo2);



console.log(projecto1);
console.log(todo1);
console.log(todo2);



const obj1 = {
  título: projecto1.título,
  utilizador: projecto1.utilizador,
  todos: todo1
}

tarefasTodo1.adicionarTarefa("tarefa1");
tarefasTodo1.adicionarTarefa("tarefa2");
tarefasTodo1.adicionarTarefa("tarefa3");
tarefasTodo1.adicionarTarefa("tarefa4");
console.log(tarefasTodo1);
tarefasTodo1.retirarTarefa("tarefa2");
console.log(tarefasTodo1);
console.log(todo1);



