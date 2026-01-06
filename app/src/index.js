import Utilizador from "./utilizadores.js";
import Projecto from "./projectos.js";
import ToDo from "./todos.js";
import "./styles.css";
import { format, compareAsc } from "date-fns";

//vars com os arrays dos conteúdos Utilizadores, Projectos e ToDos
let listaProjectos = [];
let listaToDos = [];
let utilizadores = [];




//criar o conteúdo inicial por defeito

listaProjectos.push(new Projecto("Novo Projecto"));
utilizadores.push(new Utilizador("Novo utilizador"));
listaProjectos[0].adicionarUtilizadorProjecto(utilizadores[0].nome);

//adicionar conteúdos iniciais às vars lista
/* listaProjectos.push(projectoInicial);
utilizadores.push(utilizadorInicial.nome); */

//elementos html
//Elemento Projecto
const caixaProjectosHTML = document.querySelector("#caixa-projectos");

const projectoHTML = document.createElement("div");
caixaProjectosHTML.appendChild(projectoHTML);
projectoHTML.classList.add("projecto");

//html formulário criar projecto 
const formulárioCriarProjHTML = document.querySelector("#modal-criar-proj");
const botãoAbrirFormNovoProjHTML = document.querySelector("#botao-criar-proj-js");
const botãoFecharFormNovoProjHTML = document.querySelector(".botao-fechar-proj");

//html formulário editar projecto
const formulárioEditarProjHTML = document.querySelector("#modal-editar-proj");
const botãoFecharEdiçãoProjHTML = document.querySelector(".fechar-edição-proj");
const botãoGuardarEdiçãoProjHTML = document.querySelector(".guardar-edição-proj");
const inputEditarTítuloProjHTML = document.querySelector("#editar-título-proj");
const inputEditarUtilizadoresProjHTML = document.querySelector("#editar-user-proj");

let botõesProjHTML = document.createElement("div");
projectoHTML.appendChild(botõesProjHTML);
botõesProjHTML.classList.add("botoes-projecto");
let botãoEditarProjHTML = document.createElement("button");
botõesProjHTML.appendChild(botãoEditarProjHTML);
botãoEditarProjHTML.classList.add("editar-proj");
botãoEditarProjHTML.textContent = "Editar Projecto";
/* let botãoApagarProjHML = document.createElement("button");
botõesProjHTML.appendChild(botãoApagarProjHML);
botãoApagarProjHML.classList.add("apagar-proj");
botãoApagarProjHML.textContent = "Apagar Projecto"; */

//Título projecto
const títuloProjHTML = document.querySelector(".titulo-projecto");
títuloProjHTML.textContent = listaProjectos[0].título;


//utilizadores projecto
const utilizadoresProjHTML = document.querySelector(".utilizadores");
utilizadoresProjHTML.textContent = listaProjectos[0].utilizadores;

//criar ToDo
const formulárioCriarToDoHTML = document.querySelector("#modal-criar-todo");
const botãoCriarToDoHTML = document.querySelector("#botão-criar-todo");

//guardar e fechar ToDo
const botãoGuardarNovoToDoHTML = document.querySelector(".botao-guardar-todo");
const botãofecharFormNovoToDoHTML = document.querySelector(".botao-fechar-todo");

//título ToDo
const títuloToDoHTML = document.querySelector(".titulo-todo");

//data término ToDo
const dataToDoHTML = document.querySelector(".data-todo");


//fx para criar Projecto novo
/* const botãoCriarProj = document.querySelector("#botao-criar-proj-js");
botãoCriarProj.addEventListener("click", () => {
    listaProjectos.push(new Projecto("Projecto Novo"));
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
    

    //fx para criar ToDo
    const botãoCriarTodo = document.querySelector(".botão-criar-todo");
    botãoCriarTodo.addEventListener("click", () => {
        listaToDos.push(new ToDo("Todo 2", "descrição", "2013-05-23", 1, "activo", "notas"));
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

 */

//lógica para editar o Projecto
///botões
////quando clica em editar projecto
botãoEditarProjHTML.addEventListener("click", () => {
    //limpar os inputs
    inputEditarTítuloProjHTML.value = "";
    inputEditarUtilizadoresProjHTML.value = "";
    //abre o modal
    formulárioEditarProjHTML.showModal();
} );

////editar o título e utilizador
/////lógica quando clicar em guardar
botãoGuardarEdiçãoProjHTML.addEventListener("click", () => {
    listaProjectos[0].título = inputEditarTítuloProjHTML.value;
    listaProjectos[0].utilizadores = inputEditarUtilizadoresProjHTML.value;
   
});

////fechar o modal
botãoFecharEdiçãoProjHTML.addEventListener("click", () => formulárioEditarProjHTML.close());