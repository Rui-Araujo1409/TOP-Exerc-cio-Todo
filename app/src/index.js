
import Projecto from "./projectos.js";
import ToDo from "./todos.js";
import "./styles.css";
import { format, compareAsc } from "date-fns";


//vars com os arrays dos conteúdos Utilizadores, Projectos e ToDos


/* let listaProjectos = JSON.parse(localStorage.getItem("listaProjectos"));
let listaToDos = JSON.parse(localStorage.getItem("listaToDos")); */
let listaProjectos = JSON.parse(localStorage.getItem("listaProjectos"));
let listaToDos = JSON.parse(localStorage.getItem("listaToDos"));
let utilizador;




//criar o conteúdo inicial por defeito, se não houver um projecto criado
if (listaProjectos.length === 0) {
    listaProjectos.push(new Projecto("Novo Projecto"));
    utilizador = "Novo utilizador";
    listaProjectos[0].adicionarUtilizadorProjecto(utilizador);
    listaProjectos[0].id = Math.floor(Math.random() * 100 + 1);
};


//elementos html
///Projecto
//Elemento Projecto e filhos
const caixaProjectosHTML = document.querySelector("#caixa-projectos");
const projectoHTML = document.querySelector(".projecto");
caixaProjectosHTML.appendChild(projectoHTML);
projectoHTML.setAttribute("data-id", `${listaProjectos[0].id}`);


//html formulário criar projecto + botões
const formulárioCriarProjHTML = document.querySelector("#modal-criar-proj");
const botãoAbrirFormNovoProjHTML = document.querySelector("#botao-criar-proj-js");
const botãoFecharFormNovoProjHTML = document.querySelector("#botao-fechar-proj-novo");
const botãoGuardarNovoProjHTML = document.querySelector("#botao-guardar-proj-novo");

//html formulário editar projecto + botões
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
botãoEditarProjHTML.setAttribute("data-id", `${listaProjectos[0].id}`);
botãoEditarProjHTML.textContent = "Editar Projecto";
let botãoApagarProjHML = document.createElement("button");
botõesProjHTML.appendChild(botãoApagarProjHML);
botãoApagarProjHML.classList.add("apagar-proj");
botãoApagarProjHML.setAttribute("data-id", `${listaProjectos[0].id}`);
botãoApagarProjHML.textContent = "Apagar Projecto";

//Título projecto
const títuloProjHTML = document.querySelector(".titulo-projecto");
títuloProjHTML.setAttribute("data-id", `${listaProjectos[0].id}`);
títuloProjHTML.textContent = listaProjectos[0].título;


//utilizadores projecto
const utilizadoresProjHTML = document.querySelector(".utilizadores");
utilizadoresProjHTML.setAttribute("data-id", `${listaProjectos[0].id}`);
utilizadoresProjHTML.textContent = `${listaProjectos[0].utilizador}`;


//fx para abrir form de novo projecto
botãoAbrirFormNovoProjHTML.addEventListener("click", () => {
    //inserir código para limpar inputs
    inputEditarTítuloProjHTML.value = "";
    inputEditarUtilizadoresProjHTML.value = "";
    formulárioCriarProjHTML.showModal();
});

//fx para fechar form de novo projecto
botãoFecharFormNovoProjHTML.addEventListener("click", () => {
    formulárioCriarProjHTML.close();

});

//lógica para editar o Projecto
///botões
////quando clica em editar projecto
botõesProjHTML.addEventListener("click", (e) => {
    if (e.target.className = "editar-proj") {
        const dataId = e.target.dataset.id;
        console.log(dataId);
        //limpar os inputs
        inputEditarTítuloProjHTML.value = "";
        inputEditarUtilizadoresProjHTML.value = "";
        //abre o modal
        formulárioEditarProjHTML.setAttribute("data-id", `${dataId}`);
        formulárioEditarProjHTML.showModal();
    }

});

////editar o título e utilizador
/////lógica quando clicar em guardar
botãoGuardarEdiçãoProjHTML.addEventListener("click", () => {
    listaProjectos[0].título = inputEditarTítuloProjHTML.value;
    títuloProjHTML.textContent = listaProjectos[0].título;
    utilizador = inputEditarUtilizadoresProjHTML.value;
    listaProjectos[0].utilizador = utilizador;
    utilizadoresProjHTML.textContent = listaProjectos[0].utilizador;

    console.log(localStorage.setItem("listaProjectos", JSON.stringify(listaProjectos)));

    formulárioEditarProjHTML.close();
});

////fechar o modal
botãoFecharEdiçãoProjHTML.addEventListener("click", () => formulárioEditarProjHTML.close());


//ToDos
///html inicial elementos ToDo
const caixaToDosHTML = document.querySelector(".cartoes-todos");
/* const toDoHTML = document.querySelector(".todo"); */

/* const adicionarBotõesToDoInicial = () => {
    const toDoInicialHTML = document.querySelector("todo");
    const botõesToDoHTML = document.createElement("div");
    botõesToDoHTML.classList.add("botoes-todos");
    toDoInicialHTML.appendChild(botõesToDoHTML);
    const botãoEditarToDoHTML = document.createElement("button");
    botãoEditarToDoHTML.setAttribute("id", "botão-editar-todo");
    botãoEditarToDoHTML.textContent = "Editar";
    botõesToDoHTML.appendChild(botãoEditarToDoHTML);
    const botãoApagarToDoHTML = document.createElement("button");
    botãoApagarToDoHTML.setAttribute("id", "botão-apagar-toodo");
    botãoApagarToDoHTML.textContent = "Apagar";
    botõesToDoHTML.appendChild(botãoApagarToDoHTML);
} */

//Conteúdos iniciais (se houverem)

const conteúdosToDoiniciais = () => {

    listaToDos.forEach((e) => {

        const toDoInicialHTML = document.createElement("div");
        toDoInicialHTML.classList.add("todo");
        toDoInicialHTML.setAttribute("data-id", `${e.id}`);
        caixaToDosHTML.appendChild(toDoInicialHTML);
        ///título ToDo
        const títuloToDoHTML = document.createElement("div");
        títuloToDoHTML.classList.add("titulo-todo");
        toDoInicialHTML.appendChild(títuloToDoHTML);
        títuloToDoHTML.textContent = `${e.título}`;
        ///data término
        const dataTérminoHTML = document.createElement("div");
        dataTérminoHTML.classList.add("data-todo");
        toDoInicialHTML.appendChild(dataTérminoHTML);
        dataTérminoHTML.textContent = `${e.dataTérmino}`;
        ///descrição ToDo
        const descriçãoHTML = document.createElement("div");
        descriçãoHTML.classList.add("descrição-todo");
        toDoInicialHTML.appendChild(descriçãoHTML);
        descriçãoHTML.textContent = `${e.descrição}`;
        ///prioridade ToDo
        const prioridadeHTML = document.createElement("div");
        prioridadeHTML.classList.add("prioridade");
        toDoInicialHTML.appendChild(prioridadeHTML);
        prioridadeHTML.textContent = `${e.prioridade}`;
        ///estado ToDo
        const estadoToDoHTML = document.createElement("div");
        estadoToDoHTML.classList.add("estado");
        toDoInicialHTML.appendChild(estadoToDoHTML);
        estadoToDoHTML.textContent = `${e.estado}`;
        ///tarefas ToDo
        const tarefasToDoHTML = document.createElement("div");
        tarefasToDoHTML.classList.add("tarefas");
        toDoInicialHTML.appendChild(tarefasToDoHTML);
        tarefasToDoHTML.textContent = `${e.tarefas}`;

        ///atrbuir os id nos campos
        títuloToDoHTML.setAttribute("data-id", `${e.id}`);
        dataTérminoHTML.setAttribute("data-id", `${e.id}`);
        descriçãoHTML.setAttribute("data-id", `${e.id}`);
        prioridadeHTML.setAttribute("data-id", `${e.id}`);
        estadoToDoHTML.setAttribute("data-id", `${e.id}`);
        tarefasToDoHTML.setAttribute("data-id", `${e.id}`);


        const botõesToDoHTML = document.createElement("div");
        botõesToDoHTML.classList.add("botoes-todos");
        toDoInicialHTML.appendChild(botõesToDoHTML);
        const botãoEditarToDoHTML = document.createElement("button");
        botãoEditarToDoHTML.classList.add("botão-editar-todo");
        botãoEditarToDoHTML.setAttribute("data-id", `${e.id}`);
        botãoEditarToDoHTML.textContent = "Editar";
        botõesToDoHTML.appendChild(botãoEditarToDoHTML);
        const botãoApagarToDoHTML = document.createElement("button");
        botãoApagarToDoHTML.classList.add("botão-apagar-toodo");
        botãoApagarToDoHTML.setAttribute("data-id", `${e.id}`);
        botãoApagarToDoHTML.textContent = "Apagar";
        botõesToDoHTML.appendChild(botãoApagarToDoHTML);


    });


};

if (listaToDos.length !== 0) {
    conteúdosToDoiniciais();
};


///Modal
////HTML modal criar ToDo + botão
const formulárioCriarToDoHTML = document.querySelector("#modal-criar-todo");
const botãoCriarToDoHTML = document.querySelector("#botão-criar-todo");

////HTML para editar ToDo
const formulárioEditarToDoHTML = document.querySelector("#modal-editar-todo");


////HTML botões guardar e fechar ToDo no modal Criar
const botãoGuardarNovoToDoHTML = document.querySelector(".botao-guardar-todo");
const botãofecharFormNovoToDoHTML = document.querySelector(".botao-fechar-todo");

////HTML botões guardar e fechar ToDo no modal Editar
const botãoGuardarEditarToDoHTML = document.querySelector(".botao-guardar-editar-todo");
const botãoFecharEditarToDoHTML = document.querySelector(".botao-fechar-editar-todo");

//fx para abrir modal criar ToDo
/* botãoCriarToDoHTML.addEventListener("click", () => {
    ////limpar os campos
    inputTítuloToDoHTML.value = "";
    inputDescriçãoToDoHTML.value = "";
    inputdataToDoHTML.value = "";
    inputTarefasToDoHTML.value = "";
    formulárioCriarToDoHTML.showModal();
}); */


//HTML inputs Novo ToDo
///título
const inputTítuloToDoHTML = document.querySelector("#input-titulo-todo-novo");

///descrição
const inputDescriçãoToDoHTML = document.querySelector("#input-descrição-todo-novo");

///data
const inputDataToDoHTML = document.querySelector("#input-data-termino-novo");

///prioridade
const inputPrioridadeHTML = document.getElementsByName("prioridade-novo");

///estado
const inputEstadoToDoHTML = document.getElementsByName("estado-novo");

///tarefas
const inputTarefasToDoHTML = document.querySelector("#input-tarefas-todo-novo");

//abrir form Novo ToDo
botãoCriarToDoHTML.addEventListener("click", () => {
    ////limpar os campos
    inputTítuloToDoHTML.value = "";
    inputDescriçãoToDoHTML.value = "";
    inputDataToDoHTML.value = "";
    inputTarefasToDoHTML.value = "";
    formulárioCriarToDoHTML.showModal();
});

//fxs para guardar dados novo ToDo 
botãoGuardarNovoToDoHTML.addEventListener("click", () => {
    const toDoHTML = document.createElement("div");
    toDoHTML.classList.add("todo");
    caixaToDosHTML.appendChild(toDoHTML);

    ///vars para os dados do ToDo
    let títuloToDo;
    let descriçãoToDo;
    let dataTérminoToDo;
    let prioridadeToDo;
    let estadoToDo;
    let tarefasToDo;

    ////HTML para título ToDo
    const títuloToDoHTML = document.createElement("div");
    títuloToDoHTML.classList.add("titulo-todo");
    toDoHTML.appendChild(títuloToDoHTML);

    ////HTML para data término ToDo
    const dataTérminoHTML = document.createElement("div");
    dataTérminoHTML.classList.add("data-todo");
    toDoHTML.appendChild(dataTérminoHTML);

    ////HTML para descrição ToDo
    const descriçãoHTML = document.createElement("div");
    descriçãoHTML.classList.add("descrição-todo");
    toDoHTML.appendChild(descriçãoHTML);

    ////HTML para prioridade ToDo
    const prioridadeHTML = document.createElement("div");
    prioridadeHTML.classList.add("prioridade");
    toDoHTML.appendChild(prioridadeHTML);

    ////HTML para estado ToDo
    const estadoToDoHTML = document.createElement("div");
    estadoToDoHTML.classList.add("estado");
    toDoHTML.appendChild(estadoToDoHTML);

    ////HTML para tarefas ToDo
    const tarefasToDoHTML = document.createElement("div");
    tarefasToDoHTML.classList.add("tarefas");
    toDoHTML.appendChild(tarefasToDoHTML);

    ////input título ToDo
    títuloToDo = inputTítuloToDoHTML.value;

    ////input descrição ToDo
    descriçãoToDo = inputDescriçãoToDoHTML.value;

    ////input data término ToDo
    dataTérminoToDo = inputDataToDoHTML.value;

    ////input prioridade ToDo, obter nome e obter o valor do elemento seleccionado com o método checked
    //vai dar um NodeList => converter para um array
    let prioridadeArray = Array.from(inputPrioridadeHTML);
    prioridadeArray.map((item) => {
        if (item.checked == true) { prioridadeToDo = item.value }

    });
    ////input estado ToDo, mesma lógica que a prioridade
    let estadoToDoArray = Array.from(inputEstadoToDoHTML);
    estadoToDoArray.map((item) => {
        if (item.checked == true) { estadoToDo = item.value }

    });
    ////input tarefas ToDo
    let tarefasTexto = inputTarefasToDoHTML.value;
    tarefasToDo = tarefasTexto.split(", ");

    ///criar o obj ToDo com os inputs
    listaToDos.push(new ToDo(títuloToDo, descriçãoToDo, dataTérminoToDo, prioridadeToDo, estadoToDo, tarefasToDo));

    ////criar o html da caixa do toDo com as propriedades do obj
    ////usar uma var nova com o obj apenas para o novo ToDo
    let novoObjToDo = listaToDos.slice(-1);

    //atribuir o id do ToDo
    toDoHTML.setAttribute("data-id", `${novoObjToDo[0].id}`);
    //preencher os dados
    títuloToDoHTML.textContent = novoObjToDo[0].título;
    títuloToDoHTML.setAttribute("data-id", `${novoObjToDo[0].id}`);
    dataTérminoHTML.textContent = novoObjToDo[0].dataTérmino;
    dataTérminoHTML.setAttribute("data-id", `${novoObjToDo[0].id}`);
    descriçãoHTML.textContent = novoObjToDo[0].descrição;
    descriçãoHTML.setAttribute("data-id", `${novoObjToDo[0].id}`);
    prioridadeHTML.textContent = novoObjToDo[0].prioridade;
    prioridadeHTML.setAttribute("data-id", `${novoObjToDo[0].id}`);
    estadoToDoHTML.textContent = novoObjToDo[0].estado;
    estadoToDoHTML.setAttribute("data-id", `${novoObjToDo[0].id}`);
    tarefasToDoHTML.textContent = novoObjToDo[0].tarefas;
    tarefasToDoHTML.setAttribute("data-id", `${novoObjToDo[0].id}`);

    ////adicionar botões
    const botõesToDoHTML = document.createElement("div");
    botõesToDoHTML.classList.add("botoes-todos");
    toDoHTML.appendChild(botõesToDoHTML);
    const botãoEditarToDoHTML = document.createElement("button");
    botãoEditarToDoHTML.classList.add("botão-editar-todo");
    botãoEditarToDoHTML.setAttribute("data-id", `${novoObjToDo[0].id}`);
    botãoEditarToDoHTML.textContent = "Editar";
    botõesToDoHTML.appendChild(botãoEditarToDoHTML);
    const botãoApagarToDoHTML = document.createElement("button");
    botãoApagarToDoHTML.classList.add("botão-apagar-todo");
    botãoApagarToDoHTML.setAttribute("data-id", `${novoObjToDo[0].id}`);
    botãoApagarToDoHTML.textContent = "Apagar";
    botõesToDoHTML.appendChild(botãoApagarToDoHTML);

    ////guardar os objectos
    localStorage.setItem("listaToDos", JSON.stringify(listaToDos));

    ////fechar o modal quando clica guardar
    formulárioCriarToDoHTML.close();
})


//fx para fechar form criar ToDo
botãofecharFormNovoToDoHTML.addEventListener("click", () => formulárioCriarToDoHTML.close());

//HTML inputs Novo ToDo
///título
const inputEditarTítuloToDo = document.querySelector("#input-titulo-todo");

///descrição
const inputEditarDescriçãoToDo = document.querySelector("#input-descrição-todo");

///data
const inputEditarDataToDo = document.querySelector("#input-data-termino");

///prioridade
const inputEditarPrioridadeToDo = document.getElementsByName("prioridade");

///estado
const inputEditarEstadoToDo = document.getElementsByName("estado");

///tarefas
const inputEditarTarefasToDo = document.querySelector("#input-tarefas-todo");

//fx para guardar edição ToDo
botãoGuardarEditarToDoHTML.addEventListener("click", (e) => {

    ///buscar o id do ToDo através do ID do botão editar
    const dataId = formulárioEditarToDoHTML.dataset.id;

    ////pesquisar no array listaToDos o obj com o ID e obter o index
    const indexObjEditar = listaToDos.findIndex(item => item.id == dataId);

    ///guardar o valor dos inputs (em vars?)
    ////vars para os dados do ToDo
    let títuloToDo;
    let descriçãoToDo;
    let dataTérminoToDo;
    let prioridadeToDo;
    let estadoToDo;
    let tarefasToDo;

    ///construir os selectores para identificar os elementos HTML a alterar
    const selectorTítulo = `.titulo-todo[data-id='${dataId}']`;
    const selectorData = `.data-todo[data-id='${dataId}']`;
    const selectorDescrição = `.descrição-todo[data-id='${dataId}']`;
    const selectorPrioridade = `.prioridade[data-id='${dataId}']`;
    const selectorEstado = `.estado[data-id='${dataId}']`;
    const selectorTarefas = `.tarefas[data-id='${dataId}']`;

    ///seleccionar os elementos HTML correctos (com o data-id)
    const títuloToDoHTML = document.querySelector(selectorTítulo);
    const dataTérminoHTML = document.querySelector(selectorData);
    const descriçãoHTML = document.querySelector(selectorDescrição);
    const prioridadeHTML = document.querySelector(selectorPrioridade);
    const estadoToDoHTML = document.querySelector(selectorEstado);
    const tarefasToDoHTML = document.querySelector(selectorTarefas);

    ////input título ToDo
    títuloToDo = inputEditarTítuloToDo.value;

    ////input descrição ToDo
    descriçãoToDo = inputEditarDescriçãoToDo.value;

    ////input data término ToDo
    dataTérminoToDo = inputEditarDataToDo.value;

    ////input prioridade ToDo, obter nome e obter o valor do elemento seleccionado com o método checked
    //vai dar um NodeList => converter para um array
    let prioridadeArray = Array.from(inputEditarPrioridadeToDo);
    prioridadeArray.map((item) => {
        if (item.checked == true) { prioridadeToDo = item.value }
    });

    ////input estado ToDo, mesma lógica que a prioridade
    let estadoToDoArray = Array.from(inputEditarEstadoToDo);
    estadoToDoArray.map((item) => {
        if (item.checked == true) { estadoToDo = item.value }
    });

    ////input tarefas ToDo
    let tarefasTexto = inputEditarTarefasToDo.value;
    tarefasToDo = tarefasTexto.split(", ");

    ///mudar os valores actuais dos vários campos pelos novos valores (das vars?)
    listaToDos[indexObjEditar].título = títuloToDo;
    listaToDos[indexObjEditar].dataTérmino = dataTérminoToDo;
    listaToDos[indexObjEditar].descrição = descriçãoToDo;
    listaToDos[indexObjEditar].prioridade = prioridadeToDo;
    listaToDos[indexObjEditar].estado = estadoToDo;
    listaToDos[indexObjEditar].tarefas = tarefasToDo;

    ///preencher os dados no HTML
    títuloToDoHTML.textContent = listaToDos[indexObjEditar].título;
    dataTérminoHTML.textContent = listaToDos[indexObjEditar].dataTérmino;
    descriçãoHTML.textContent = listaToDos[indexObjEditar].descrição;
    prioridadeHTML.textContent = listaToDos[indexObjEditar].prioridade;
    estadoToDoHTML.textContent = listaToDos[indexObjEditar].estado;
    tarefasToDoHTML.textContent = listaToDos[indexObjEditar].tarefas;

    ////guardar os objectos
    /*  localStorage.setItem("listaToDos", JSON.stringify(listaToDos)); */

    ////fechar o modal quando clica guardar
    /*   formulárioCriarToDoHTML.close(); */

});


///fx para fechar modal editar ToDo

botãoFecharEditarToDoHTML.addEventListener("click", () => formulárioEditarToDoHTML.close());


///fx para editar ToDo (usar o event delegation porque o html do botão só é criado posteriormente)
caixaToDosHTML.addEventListener("click", (e) => {
    if (e.target.className == "botão-editar-todo") {
        inputTítuloToDoHTML.value = "";
        inputDescriçãoToDoHTML.value = "";
        inputDataToDoHTML.value = "";
        inputTarefasToDoHTML.value = "";
        //atribuir ao botão editar ToDo o id do Todo clicado
        const dataId = e.target.dataset.id;
        formulárioEditarToDoHTML.setAttribute("data-id", `${dataId}`);
        formulárioEditarToDoHTML.showModal();

    }
});

////fx para apagar ToDo
/* botãoApagarToDoHTML.addEventListener("click", () => {
    //identificar no array dos todos o todo que tem o título ==, sacar o index e retirar com splice(index,1);
    alert("clicou em apagar");
    listaToDos.map((el, index) => {
        if (el == "ToDo3") {
            console.log(el[index]);
        }
    })
}); */

