import Utilizadores from "./utilizadores.js";
import Projectos from "./projectos.js";
import ToDos from "./todos.js";
import "./styles.css";
import { format, compareAsc } from "date-fns";


let listaProjectos = [];

const utilizador1 = new Utilizadores("Rui Araújo");
const utilizador2 = new Utilizadores("Joaquim Araújo");
const utilizador3 = new Utilizadores("Ana Araújo");
console.log(utilizador1);

const projecto1 = new Projectos("Projecto 1");
projecto1.adicionarUtilizadorProjecto(utilizador1.nome);
projecto1.adicionarUtilizadorProjecto(utilizador2.nome);

const projecto2 = new Projectos("Projecto 2");

listaProjectos.push(projecto1);
listaProjectos.push(projecto2);
console.log(listaProjectos);


const todo1 = new ToDos("Todo 1", "descrição", "2010-04-08", 1, "activo", "notas");

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




todo1.alterarDescrição("Nova descrição");
todo1.alterarNotas("Nova nota");
//todo1.alterarTítuloToDo("Novo título");
//projecto1.alterarTítuloProjecto("Novo título");
console.log(projecto1);



//elementos html
//Elemento Projecto
const caixaProjectosHTML = document.querySelector("#caixa-projectos");



//Título projecto
const títuloProjHTML = document.querySelector(".titulo-projecto");
títuloProjHTML.textContent = projecto1.título;

//utilizadores projecto
const utilizadoresProjHTML = document.querySelector(".utilizadores");
utilizadoresProjHTML.textContent = projecto1.utilizadores;

//título ToDo
const títuloToDoHTML = document.querySelector(".titulo-todo");
títuloToDoHTML.textContent = todo1.título;

//data término ToDo
const dataToDoHTML = document.querySelector(".data-todo");
const dataFormatar = todo1.dataTérmino.split("-");
const dataObj = new Date(dataFormatar[0], dataFormatar[1]-1, dataFormatar[2]);
const dataHTML = format(dataObj, "dd-MM-yyyy");
dataToDoHTML.textContent = dataHTML;

//fx para criar Projecto novo
const botãoCriarProj = document.querySelector(".criar-proj-js");
botãoCriarProj.addEventListener("click", () => {
    listaProjectos.push(new Projectos("Projecto Novo"));
    let projecto = listaProjectos.at(-1);
    projecto.adicionarUtilizadorProjecto(utilizador1.nome);
    let projectoHTML = document.createElement("div");
    caixaProjectosHTML.appendChild(projectoHTML);
    projectoHTML.classList.add("projecto");
    let infoProjHTML = document.createElement("div");
    projectoHTML.appendChild(infoProjHTML);
    projectoHTML.classList.add("info-projecto");
    let títuloProjNovoHTML = document.createElement("div");
    infoProjHTML.appendChild(títuloProjNovoHTML);
    títuloProjNovoHTML.classList.add("titulo-projecto");
    títuloProjNovoHTML.textContent = projecto.título;
    let utilizadoresProjNovoHTML = document.createElement("div");
    infoProjHTML.appendChild(utilizadoresProjNovoHTML);
    utilizadoresProjNovoHTML.classList.add("utilizadores");
    console.log(projecto);
    utilizadoresProjNovoHTML.textContent = projecto.utilizadores;
    

});



