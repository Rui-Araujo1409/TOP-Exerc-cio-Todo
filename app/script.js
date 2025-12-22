class Utilizadores {
  constructor(nome) {
    this.nome = nome;
  }
  
  alterarNome(novoNome) { this.nome = novoNome; }
}

class Projectos {
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



class ToDos {
  constructor(título, descrição, dataTérmino, prioridade, estado, notas, tarefas) {
    this.título = título
  this.descrição = descrição;
  this.dataTérmino = dataTérmino;
  this.prioridade = prioridade;
    this.estado = estado;
  this.notas = notas;
    this.tarefas = [];
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
  
  alterarTítuloToDo(novoTítulo) {
    this.título = novoTítulo;
  }
  
  alterarDescrição(novaDescrição) {
    this.descrição = novaDescrição;
  }
  
  alterarNotas(novaNotas) {
    this.notas = novaNotas;
  }
  
  adicionarTarefa(tarefa) { this.tarefas.push(tarefa); }
  retirarTarefa(tarefa) {
    let index = this.tarefas.findIndex(elemento => elemento == tarefa);
  this.tarefas.splice(index,1);
  }
 
}



const utilizador1 = new Utilizadores("Rui Araújo");
const utilizador2 = new Utilizadores("Joaquim Araújo");
const utilizador3 = new Utilizadores("Ana Araújo");
console.log(utilizador1);

const projecto1 = new Projectos("Projecto 1");
projecto1.adicionarUtilizadorProjecto(utilizador1.nome);

const projecto2 = new Projectos("Projecto 2");




const todo1 = new ToDos("Todo 1", "descrição", "13/12/2025", 1, "activo", "notas");

const todo2 = new ToDos("Todo 2", "descrição", "data", 0, "inactivo", "notas");


console.log(projecto1);
console.log(todo1);
console.log(todo2);
projecto1.adicionarToDos(todo1);
console.log(projecto1);


todo1.adicionarTarefa("tarefa1");
todo1.adicionarTarefa("tarefa2");
todo1.adicionarTarefa("tarefa3");
todo1.adicionarTarefa("tarefa4");
console.log(todo1);
todo1.retirarTarefa("tarefa3");
console.log(todo1);


const dataFormatar = todo1.dataTérmino.split("/");
console.log(dataFormatar);
const dataObj = new Date(dataFormatar[2], dataFormatar[1]-1, dataFormatar[0]);
console.log(dataObj.getDate());
console.log(dataObj.getMonth()+1);
console.log(dataObj.getFullYear());

todo1.alterarDescrição("Nova descrição");
todo1.alterarNotas("Nova nota");
todo1.alterarTítuloToDo("Novo título");
projecto1.alterarTítuloProjecto("Novo título");
console.log(projecto1);