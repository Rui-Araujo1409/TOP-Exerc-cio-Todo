
import Projecto from "./projectos.js";
import ToDo from "./todos.js";
import "./styles.css";
import { format, compareAsc } from "date-fns";


//vars com os arrays dos conteúdos Utilizadores, Projectos e ToDos
let listaProjectos = JSON.parse(localStorage.getItem("listaProjectos"));
let listaToDos = JSON.parse(localStorage.getItem("listaToDos"));
let utilizador;



//elementos html
///Projecto
//Elemento Projecto e filhos
const caixaProjectosHTML = document.querySelector("#caixa-projectos");

//html formulário criar projecto + botões
const formulárioCriarProjHTML = document.querySelector("#modal-criar-proj");
const botãoAbrirFormNovoProjHTML = document.querySelector("#botao-criar-proj-js");
const botãoFecharFormNovoProjHTML = document.querySelector("#botao-fechar-proj-novo");
const botãoGuardarNovoProjHTML = document.querySelector("#botao-guardar-proj-novo");

//html formulário editar projecto + botões
const formulárioEditarProjHTML = document.querySelector("#modal-editar-proj");
const botãoFecharEdiçãoProjHTML = document.querySelector(".fechar-edição-proj");
const botãoGuardarEdiçãoProjHTML = document.querySelector(".guardar-edição-proj");
const inputEditarTítuloProjHTML = document.querySelector("#input-editar-título-proj");
const inputEditarUtilizadoresProjHTML = document.querySelector("#input-editar-user-proj");
const inputTítuloNovoProj = document.querySelector("#input-titulo-proj");
const inputUtilizadoresNovoProj = document.querySelector("#input-utilizadores-proj");

//fx para conteúdos 
const conteúdosProjInicial = () => {
    listaProjectos.push(new Projecto("Novo Projecto"));
    utilizador = "Novo utilizador";
    listaProjectos[0].adicionarUtilizadorProjecto(utilizador);
    listaProjectos[0].id = Math.floor(Math.random() * 100 + 1);
    const dataID = listaProjectos[0].id;
    const projectoInicial = document.createElement("div");
    projectoInicial.classList.add("projecto");
    projectoInicial.setAttribute("data-id", `${dataID}`);
    caixaProjectosHTML.appendChild(projectoInicial);

    const botõesProjHTML = document.createElement("div");
    projectoInicial.appendChild(botõesProjHTML);
    botõesProjHTML.classList.add("botoes-projecto");
    const botãoEditarProjHTML = document.createElement("button");
    botõesProjHTML.appendChild(botãoEditarProjHTML);
    botãoEditarProjHTML.classList.add("editar-proj");
    botãoEditarProjHTML.setAttribute("data-id", `${dataID}`);
    botãoEditarProjHTML.textContent = "Editar Projecto";
    const botãoApagarProjHML = document.createElement("button");
    botõesProjHTML.appendChild(botãoApagarProjHML);
    botãoApagarProjHML.classList.add("apagar-proj");
    botãoApagarProjHML.setAttribute("data-id", `${dataID}`);
    botãoApagarProjHML.textContent = "Apagar Projecto";
    const criarToDo = document.createElement("div");
    criarToDo.classList.add("criar-todo");
    projectoInicial.appendChild(criarToDo);
    const botãoCriarToDo = document.createElement("button");
    botãoCriarToDo.classList.add("botão-criar-todo");
    criarToDo.appendChild(botãoCriarToDo);
    botãoCriarToDo.textContent = "Criar novo ToDo";
    botãoCriarToDo.setAttribute("data-id", `${dataID}`);

    //Título projecto
    const infoProjHTML = document.createElement("div");
    infoProjHTML.classList.add("info-projecto");
    infoProjHTML.setAttribute("data-id", `${dataID}`);
    projectoInicial.appendChild(infoProjHTML);
    const títuloProjHTML = document.createElement("div");
    títuloProjHTML.classList.add("titulo-projecto");
    infoProjHTML.appendChild(títuloProjHTML);
    títuloProjHTML.setAttribute("data-id", `${dataID}`);
    títuloProjHTML.textContent = listaProjectos[0].título;

    //utilizadores projecto
    const utilizadoresProjHTML = document.createElement("div");
    utilizadoresProjHTML.classList.add("utilizadores");
    infoProjHTML.appendChild(utilizadoresProjHTML);
    utilizadoresProjHTML.setAttribute("data-id", `${dataID}`);
    utilizadoresProjHTML.textContent = listaProjectos[0].utilizadores;
}

//fx para carregar conteúdos Projectos

const conteúdosProjExistentes = () => {

    listaProjectos.forEach((e) => {
        const dataID = e.id;
        const projectoHTML = document.createElement("div");
        projectoHTML.classList.add("projecto");
        caixaProjectosHTML.appendChild(projectoHTML);
        projectoHTML.setAttribute("data-id", `${dataID}`);

        const botõesProjHTML = document.createElement("div");
        projectoHTML.appendChild(botõesProjHTML);
        botõesProjHTML.classList.add("botoes-projecto");
        const botãoEditarProjHTML = document.createElement("button");
        botõesProjHTML.appendChild(botãoEditarProjHTML);
        botãoEditarProjHTML.classList.add("editar-proj");
        botãoEditarProjHTML.setAttribute("data-id", `${dataID}`);
        botãoEditarProjHTML.textContent = "Editar Projecto";
        const botãoApagarProjHML = document.createElement("button");
        botõesProjHTML.appendChild(botãoApagarProjHML);
        botãoApagarProjHML.classList.add("apagar-proj");
        botãoApagarProjHML.setAttribute("data-id", `${dataID}`);
        botãoApagarProjHML.textContent = "Apagar Projecto";
        const criarToDo = document.createElement("div");
        criarToDo.classList.add("criar-todo");
        projectoHTML.appendChild(criarToDo);
        const botãoCriarToDo = document.createElement("button");
        botãoCriarToDo.classList.add("botão-criar-todo");
        criarToDo.appendChild(botãoCriarToDo);
        botãoCriarToDo.textContent = "Criar novo ToDo";
        botãoCriarToDo.setAttribute("data-id", `${dataID}`);

        //Título projecto
        const infoProjHTML = document.createElement("div");
        infoProjHTML.classList.add("info-projecto");
        projectoHTML.appendChild(infoProjHTML);
        const títuloProjHTML = document.createElement("div");
        títuloProjHTML.classList.add("titulo-projecto");
        infoProjHTML.appendChild(títuloProjHTML);
        títuloProjHTML.setAttribute("data-id", `${dataID}`);
        títuloProjHTML.textContent = e.título;

        //utilizadores projecto
        const utilizadoresProjHTML = document.createElement("div");
        utilizadoresProjHTML.classList.add("utilizadores");
        infoProjHTML.appendChild(utilizadoresProjHTML);
        utilizadoresProjHTML.setAttribute("data-id", `${dataID}`);
        utilizadoresProjHTML.textContent = `${e.utilizador}`;

        //toDos projecto
        if (e.todos.length > 0) {
            const caixaToDosHTML = document.createElement("div");
            caixaToDosHTML.classList.add("cartoes-todo");
            caixaToDosHTML.setAttribute("data-id", `${dataID}`);
            projectoHTML.appendChild(caixaToDosHTML);
            e.todos.forEach((e) => {
                const objToDo = e;
                const toDoHTML = document.createElement("div");
                toDoHTML.classList.add("todo");
                toDoHTML.setAttribute("data-id", `${objToDo.id}`);
                caixaToDosHTML.appendChild(toDoHTML);

                ///título ToDo
                const títuloToDoHTML = document.createElement("div");
                títuloToDoHTML.classList.add("titulo-todo");
                toDoHTML.appendChild(títuloToDoHTML);
                títuloToDoHTML.textContent = objToDo.título;
                ///data término
                const dataTérminoHTML = document.createElement("div");
                dataTérminoHTML.classList.add("data-todo");
                toDoHTML.appendChild(dataTérminoHTML);
                dataTérminoHTML.textContent = objToDo.dataTérmino;
                ///descrição ToDo
                const descriçãoHTML = document.createElement("div");
                descriçãoHTML.classList.add("descrição-todo");
                toDoHTML.appendChild(descriçãoHTML);
                descriçãoHTML.textContent = objToDo.descrição;
                ///prioridade ToDo
                const prioridadeHTML = document.createElement("div");
                prioridadeHTML.classList.add("prioridade");
                toDoHTML.appendChild(prioridadeHTML);
                prioridadeHTML.textContent = objToDo.prioridade;
                ///estado ToDo
                const estadoToDoHTML = document.createElement("div");
                estadoToDoHTML.classList.add("estado");
                toDoHTML.appendChild(estadoToDoHTML);
                estadoToDoHTML.textContent = objToDo.estado;
                ///tarefas ToDo
                const tarefasToDoHTML = document.createElement("div");
                tarefasToDoHTML.classList.add("tarefas");
                toDoHTML.appendChild(tarefasToDoHTML);
                tarefasToDoHTML.textContent = objToDo.tarefas;

                ///atrbuir os id nos campos
                títuloToDoHTML.setAttribute("data-id", `${objToDo.id}`);
                dataTérminoHTML.setAttribute("data-id", `${objToDo.id}`);
                descriçãoHTML.setAttribute("data-id", `${objToDo.id}`);
                prioridadeHTML.setAttribute("data-id", `${objToDo.id}`);
                estadoToDoHTML.setAttribute("data-id", `${objToDo.id}`);
                tarefasToDoHTML.setAttribute("data-id", `${objToDo.id}`);

                //criar os botões
                const botõesToDoHTML = document.createElement("div");
                botõesToDoHTML.classList.add("botoes-todos");
                toDoHTML.appendChild(botõesToDoHTML);
                const botãoEditarToDoHTML = document.createElement("button");
                botãoEditarToDoHTML.classList.add("botão-editar-todo");
                botãoEditarToDoHTML.setAttribute("data-id", `${objToDo.id}`);
                botãoEditarToDoHTML.textContent = "Editar";
                botõesToDoHTML.appendChild(botãoEditarToDoHTML);
                const botãoApagarToDoHTML = document.createElement("button");
                botãoApagarToDoHTML.classList.add("botão-apagar-toodo");
                botãoApagarToDoHTML.setAttribute("data-id", `${objToDo.id}`);
                botãoApagarToDoHTML.textContent = "Apagar";
                botõesToDoHTML.appendChild(botãoApagarToDoHTML);

            })
        }
    })
};

//criar o conteúdo inicial por defeito, se não houver um projecto criado
if (listaProjectos.length === 0) {
    conteúdosProjInicial();

} else {
    conteúdosProjExistentes();
};

//fx para abrir form de novo projecto
botãoAbrirFormNovoProjHTML.addEventListener("click", () => {
    //inserir código para limpar inputs
    /* inputTítuloNovoProj.value = "";
    inputUtilizadoresNovoProj.value = ""; */
    formulárioCriarProjHTML.showModal();
});

//fx para fechar form de novo projecto
botãoFecharFormNovoProjHTML.addEventListener("click", () => {
    formulárioCriarProjHTML.close();

});

//fx para guardar dados novo projecto
botãoGuardarNovoProjHTML.addEventListener("click", () => {
    const títuloProjNovo = inputTítuloNovoProj.value;
    const utilizadoresProjNovo = inputUtilizadoresNovoProj.value;

    listaProjectos.push(new Projecto(títuloProjNovo, utilizadoresProjNovo));

    const novoProj = listaProjectos.slice(-1);
    novoProj[0].adicionarUtilizadorProjecto(utilizadoresProjNovo);

    const projecto = document.createElement("div");
    projecto.setAttribute("data-id", `${novoProj[0].id}`);
    projecto.classList.add("projecto");
    caixaProjectosHTML.appendChild(projecto);
    const infoProjNovoHTML = document.createElement("div");
    infoProjNovoHTML.classList.add("info-projecto");
    infoProjNovoHTML.setAttribute("data-id", `${novoProj[0].id}`);
    projecto.appendChild(infoProjNovoHTML);
    const títuloProjNovoHTML = document.createElement("div");
    títuloProjNovoHTML.classList.add("titulo-projecto");
    títuloProjNovoHTML.setAttribute("data-id", `${novoProj[0].id}`);
    infoProjNovoHTML.appendChild(títuloProjNovoHTML);
    títuloProjNovoHTML.textContent = novoProj[0].título;
    const utilizadoresProjNovoHTML = document.createElement("div");
    utilizadoresProjNovoHTML.classList.add("utilizadores");
    utilizadoresProjNovoHTML.setAttribute("data-id", `${novoProj[0].id}`);
    infoProjNovoHTML.appendChild(utilizadoresProjNovoHTML);
    utilizadoresProjNovoHTML.textContent = novoProj[0].utilizadores;

    const caixaToDos = document.createElement("div");
    projecto.appendChild(caixaToDos);
    caixaToDos.classList.add("todo");
    caixaToDos.textContent = "Caixa dos ToDos";
    const criarToDo = document.createElement("div");
    criarToDo.classList.add("criar-todo");
    projecto.appendChild(criarToDo);
    const botãoCriarToDo = document.createElement("button");
    botãoCriarToDo.classList.add("botão-criar-todo");
    criarToDo.appendChild(botãoCriarToDo);
    botãoCriarToDo.textContent = "Criar novo ToDo";

    const botõesProjHTML = document.createElement("div");
    projecto.appendChild(botõesProjHTML);
    botõesProjHTML.classList.add("botoes-projecto");
    const botãoEditarProjHTML = document.createElement("button");
    botõesProjHTML.appendChild(botãoEditarProjHTML);
    botãoEditarProjHTML.classList.add("editar-proj");
    botãoEditarProjHTML.setAttribute("data-id", `${novoProj[0].id}`);
    botãoEditarProjHTML.textContent = "Editar Projecto";
    const botãoApagarProjHML = document.createElement("button");
    botõesProjHTML.appendChild(botãoApagarProjHML);
    botãoApagarProjHML.classList.add("apagar-proj");
    botãoApagarProjHML.setAttribute("data-id", `${novoProj[0].id}`);
    botãoApagarProjHML.textContent = "Apagar Projecto";



    localStorage.setItem("listaProjectos", JSON.stringify(listaProjectos));

    formulárioCriarProjHTML.close();
});

//lógica para editar o Projecto
///botões
////quando clica em editar projecto
caixaProjectosHTML.addEventListener("click", (e) => {
    if (e.target.className == "editar-proj") {
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

    ///buscar o id do projecto através do ID do botão editar
    const dataId = formulárioEditarProjHTML.dataset.id;
    const idTítuloHTML = `.titulo-projecto[data-id='${dataId}']`;
    const idUtilizadoresHTML = `.utilizadores[data-id='${dataId}']`;

    ////pesquisar no array listaToDos o obj com o ID e obter o index
    const indexObjEditar = listaProjectos.findIndex(item => item.id == dataId);

    const títuloProjHTML = document.querySelector(idTítuloHTML);
    listaProjectos[indexObjEditar].título = inputEditarTítuloProjHTML.value;
    títuloProjHTML.textContent = listaProjectos[indexObjEditar].título;
    const utilizadoresProjHTML = document.querySelector(idUtilizadoresHTML);
    listaProjectos[indexObjEditar].utilizador = inputEditarUtilizadoresProjHTML.value;
    utilizadoresProjHTML.textContent = listaProjectos[indexObjEditar].utilizador;

    localStorage.setItem("listaProjectos", JSON.stringify(listaProjectos));

    formulárioEditarProjHTML.close();
});

////fechar o modal
botãoFecharEdiçãoProjHTML.addEventListener("click", () => {
    formulárioEditarProjHTML.close();
});


//ToDos
///Modal
////HTML modal criar ToDo + botão
const formulárioCriarToDoHTML = document.querySelector("#modal-criar-todo");

////HTML para editar ToDo
const formulárioEditarToDoHTML = document.querySelector("#modal-editar-todo");

////HTML botões guardar e fechar ToDo no modal Criar
const botãoGuardarNovoToDoHTML = document.querySelector(".botao-guardar-todo");
const botãofecharFormNovoToDoHTML = document.querySelector(".botao-fechar-todo");

////HTML botões guardar e fechar ToDo no modal Editar
const botãoGuardarEditarToDoHTML = document.querySelector(".botao-guardar-editar-todo");
const botãoFecharEditarToDoHTML = document.querySelector(".botao-fechar-editar-todo");

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
caixaProjectosHTML.addEventListener("click", (e) => {
    if (e.target.className == "botão-criar-todo") {
        inputTítuloToDoHTML.value = "";
        inputDescriçãoToDoHTML.value = "";
        inputDataToDoHTML.value = "";
        inputTarefasToDoHTML.value = "";
        formulárioCriarToDoHTML.setAttribute("data-id", `${e.target.dataset.id}`);
        formulárioCriarToDoHTML.showModal();
    }
});

//fxs para guardar dados novo ToDo 
botãoGuardarNovoToDoHTML.addEventListener("click", () => {

    ///buscar ID do projecto
    const dataId = formulárioCriarToDoHTML.dataset.id;

    //identificar o index do Projecto
    const indexProj = listaProjectos.findIndex(item => item.id == dataId);

    //identificar o obj do Projecto
    const projToDo = listaProjectos[indexProj];
    const idProj = `.projecto[data-id='${dataId}']`;

    const projToDoHTML = document.querySelector(idProj);
    const caixaToDosHTML = document.createElement("div");
    caixaToDosHTML.classList.add(".cartoes-todos");
    caixaToDosHTML.setAttribute("data-id", `${dataId}`);
    projToDoHTML.appendChild(caixaToDosHTML);
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
    let novoToDoArray = listaToDos.slice(-1);
    let novoObjToDo = novoToDoArray[0];

    ////adicionar o toDo ao projecto
    projToDo.todos.push(novoObjToDo);
    console.log(listaProjectos);

    //atribuir o id do ToDo
    toDoHTML.setAttribute("data-id", `${novoObjToDo.id}`);
    //preencher os dados
    títuloToDoHTML.textContent = novoObjToDo.título;
    títuloToDoHTML.setAttribute("data-id", `${novoObjToDo.id}`);
    dataTérminoHTML.textContent = novoObjToDo.dataTérmino;
    dataTérminoHTML.setAttribute("data-id", `${novoObjToDo.id}`);
    descriçãoHTML.textContent = novoObjToDo.descrição;
    descriçãoHTML.setAttribute("data-id", `${novoObjToDo.id}`);
    prioridadeHTML.textContent = novoObjToDo.prioridade;
    prioridadeHTML.setAttribute("data-id", `${novoObjToDo.id}`);
    estadoToDoHTML.textContent = novoObjToDo.estado;
    estadoToDoHTML.setAttribute("data-id", `${novoObjToDo.id}`);
    tarefasToDoHTML.textContent = novoObjToDo.tarefas;
    tarefasToDoHTML.setAttribute("data-id", `${novoObjToDo.id}`);

    ////adicionar botões
    const botõesToDoHTML = document.createElement("div");
    botõesToDoHTML.classList.add("botoes-todos");
    projToDoHTML.appendChild(botõesToDoHTML);
    const botãoEditarToDoHTML = document.createElement("button");
    botãoEditarToDoHTML.classList.add("botão-editar-todo");
    botãoEditarToDoHTML.setAttribute("data-id", `${novoObjToDo.id}`);
    botãoEditarToDoHTML.textContent = "Editar";
    botõesToDoHTML.appendChild(botãoEditarToDoHTML);
    const botãoApagarToDoHTML = document.createElement("button");
    botãoApagarToDoHTML.classList.add("botão-apagar-todo");
    botãoApagarToDoHTML.setAttribute("data-id", `${novoObjToDo.id}`);
    botãoApagarToDoHTML.textContent = "Apagar";
    botõesToDoHTML.appendChild(botãoApagarToDoHTML);

    ////guardar os objectos
    localStorage.setItem("listaToDos", JSON.stringify(listaToDos));
    localStorage.setItem("listaProjectos", JSON.stringify(listaProjectos));

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
caixaProjectosHTML.addEventListener("click", (e) => {
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
caixaProjectosHTML.addEventListener("click", (e) => {

    if (e.target.className == "botão-apagar-toodo") {

        const id = e.target.dataset.id;

        const indexToDoApagar = listaToDos.findIndex((e) => e.id == id);

        //apagar o todo do array dos todos
        listaToDos.splice(indexToDoApagar, 1);

        //apagar o todo do array dos projectos
        listaProjectos.forEach((e) => {
            e.todos.forEach((e, i, a) => {
                if (e.id == id) {
                    a.splice(i, 1);
                }
            });
        });

        const textoSelectorApagar = `.todo[data-id='${id}']`;
        const todoApagarHTML = document.querySelector(textoSelectorApagar);
        todoApagarHTML.remove();

        ////guardar os objectos
        localStorage.setItem("listaToDos", JSON.stringify(listaToDos));
        localStorage.setItem("listaProjectos", JSON.stringify(listaProjectos));
    }

});

//fx para apagar Projecto
caixaProjectosHTML.addEventListener("click", (e) => {
    if (e.target.className == "apagar-proj") {

        const idProj = e.target.dataset.id;
        console.log(idProj)

    }
})

