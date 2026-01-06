import {format} from "date-fns";

export default class ToDo {
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