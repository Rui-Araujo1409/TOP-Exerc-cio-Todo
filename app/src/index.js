import Utilizadores from "./utilizadores.js";
import Projectos from "./projectos.js";
import ToDos from "./todos.js";
import "./styles.css";
import { format, compareAsc } from "date-fns";


let listaProjectos = [];
let listaToDos = [];
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

const projectoHTML = document.createElement("div");
caixaProjectosHTML.appendChild(projectoHTML);
projectoHTML.classList.add("projecto");

const formulárioProjHTML = document.querySelector("#modal-criar-proj");
const botãoAbrirFormNovoProjHTML = document.querySelector("#botao-criar-proj-js");
const botãoFecharFormNovoProjHTML = document.querySelector(".botao-fechar-proj");

//Título projecto
const títuloProjHTML = document.querySelector(".titulo-projecto");
títuloProjHTML.textContent = projecto1.título;

//utilizadores projecto
const utilizadoresProjHTML = document.querySelector(".utilizadores");
utilizadoresProjHTML.textContent = projecto1.utilizadores;

//criar ToDo
const formulárioCriarToDoHTML = document.querySelector("#modal-criar-todo");
const botãoCriarToDoHTML = document.querySelector("#botão-criar-todo");

//guardar e fechar ToDo
const botãoGuardarNovoToDoHTML = document.querySelector(".botao-guardar-todo");
const botãofecharFormNovoToDoHTML = document.querySelector(".botao-fechar-todo");

//título ToDo
const títuloToDoHTML = document.querySelector(".titulo-todo");
títuloToDoHTML.textContent = todo1.título;

//data término ToDo
const dataToDoHTML = document.querySelector(".data-todo");
const dataFormatar = todo1.dataTérmino.split("-");
const dataObj = new Date(dataFormatar[0], dataFormatar[1] - 1, dataFormatar[2]);
const dataHTML = format(dataObj, "dd-MM-yyyy");
dataToDoHTML.textContent = dataHTML;

//fx para criar Projecto novo
const botãoCriarProj = document.querySelector("#botao-criar-proj-js");
botãoCriarProj.addEventListener("click", () => {
    listaProjectos.push(new Projectos("Projecto Novo"));
    let projecto = listaProjectos.at(-1);
    projecto.adicionarUtilizadorProjecto(utilizador1.nome);
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
    utilizadoresProjNovoHTML.textContent = projecto.utilizadores;
    let cartõesToDoHTML = document.createElement("div");
    projectoHTML.appendChild(cartõesToDoHTML);
    cartõesToDoHTML.classList.add("cartoes-todo");
    let criarToDoHTML = document.createElement("div");
    cartõesToDoHTML.appendChild(criarToDoHTML);
    criarToDoHTML.classList.add("criar-todo");
    let botãoCriarTodoHTML = document.createElement("button");
    criarToDoHTML.appendChild(botãoCriarTodoHTML);
    botãoCriarTodoHTML.classList.add("botão-criar-todo")
    botãoCriarTodoHTML.textContent = "Criar ToDo";
    let botõesProjHTML = document.createElement("div");
    projectoHTML.appendChild(botõesProjHTML);
    botõesProjHTML.classList.add("botoes-projecto");
    let botãoEditarProjHTML = document.createElement("button");
    botõesProjHTML.appendChild(botãoEditarProjHTML);
    botãoEditarProjHTML.classList.add("editar-proj");
    botãoEditarProjHTML.textContent = "Editar Projecto";
    let botãoApagarProjHML = document.createElement("button");
    botõesProjHTML.appendChild(botãoApagarProjHML);
    botãoApagarProjHML.classList.add("apagar-proj");
    botãoApagarProjHML.textContent = "Apagar Projecto";

    //fx para criar ToDo
    const botãoCriarTodo = document.querySelector(".botão-criar-todo");
    botãoCriarTodo.addEventListener("click", () => {
        listaToDos.push(new ToDos("Todo 2", "descrição", "2013-05-23", 1, "activo", "notas"));
        let toDo = listaToDos.at(-1);
        console.log(toDo);
        let toDoHTML = document.createElement("div");
        cartõesToDoHTML.appendChild(toDoHTML);
        toDoHTML.classList.add("todo");
        let títuloToDoHTML = document.createElement("div");
        toDoHTML.appendChild(títuloToDoHTML);
        títuloToDoHTML.classList.add("titulo-todo");
        títuloToDoHTML.textContent = toDo.título;
        let dataToDoHTML2 = document.createElement("div");
        toDoHTML.appendChild(dataToDoHTML2);
        dataToDoHTML2.classList.add("data-todo");
        let dataFormatar2 = toDo.dataTérmino.split("-");
        let dataObj2 = new Date(dataFormatar2[0], dataFormatar2[1] - 1, dataFormatar2[2]);
        let dataHTML2 = format(dataObj2, "dd-MM-yyyy");
        dataToDoHTML2.textContent = dataHTML2;
        let botõesToDoHTML = document.createElement("div");
        toDoHTML.appendChild(botõesToDoHTML);
        botõesToDoHTML.classList.add("botoes-todos");
        let botãoEditarToDoHTML = document.createElement("button");
        botõesToDoHTML.appendChild(botãoEditarToDoHTML);
        botãoEditarToDoHTML.classList.add("editar-todo");
        botãoEditarToDoHTML.textContent = "Editar";
        let botãoExpandirToDoHTML = document.createElement("button");
        botõesToDoHTML.appendChild(botãoExpandirToDoHTML);
        botãoExpandirToDoHTML.classList.add("expandir-todo");
        botãoExpandirToDoHTML.textContent = "Detalhes";
        let botãoApagarToDoHTML = document.createElement("button");
        botõesToDoHTML.appendChild(botãoApagarToDoHTML);
        botãoApagarToDoHTML.classList.add("apagar-todo");
        botãoApagarToDoHTML.textContent = "Apagar";

    });
});

//fx para abrir form de novo projecto
botãoAbrirFormNovoProjHTML.addEventListener("click", () => formulárioProjHTML.showModal());

//fx para fechar form de novo projecto
botãoFecharFormNovoProjHTML.addEventListener("click", () => {
    formulárioProjHTML.close();
    //inserir código para limpar valores
})


//fx para abrir form criar ToDo
botãoCriarToDoHTML.addEventListener("click", () => formulárioCriarToDoHTML.showModal());

//fx para fechar form criar ToDo
botãofecharFormNovoToDoHTML.addEventListener("click", () => formulárioCriarToDoHTML.close());


