
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
const botãoFecharFormNovoProjHTML = document.querySelector(".botao-fechar-proj");

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
botãoEditarProjHTML.textContent = "Editar Projecto";
let botãoApagarProjHML = document.createElement("button");
botõesProjHTML.appendChild(botãoApagarProjHML);
botãoApagarProjHML.classList.add("apagar-proj");
botãoApagarProjHML.textContent = "Apagar Projecto";

//Título projecto
const títuloProjHTML = document.querySelector(".titulo-projecto");
títuloProjHTML.textContent = listaProjectos[0].título;


//utilizadores projecto
const utilizadoresProjHTML = document.querySelector(".utilizadores");
utilizadoresProjHTML.textContent = utilizador;


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
botãoEditarProjHTML.addEventListener("click", () => {
    //limpar os inputs
    inputEditarTítuloProjHTML.value = "";
    inputEditarUtilizadoresProjHTML.value = "";
    //abre o modal
    formulárioEditarProjHTML.showModal();
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


        const botõesToDoHTML = document.createElement("div");
        botõesToDoHTML.classList.add("botoes-todos");
        toDoInicialHTML.appendChild(botõesToDoHTML);
        const botãoEditarToDoHTML = document.createElement("button");
        botãoEditarToDoHTML.setAttribute("id", "botão-editar-todo");
        botãoEditarToDoHTML.setAttribute("data-id", `${e.id}`);
        botãoEditarToDoHTML.textContent = "Editar";
        botõesToDoHTML.appendChild(botãoEditarToDoHTML);
        const botãoApagarToDoHTML = document.createElement("button");
        botãoApagarToDoHTML.setAttribute("id", "botão-apagar-toodo");
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


//HTML input título ToDo
const inputTítuloToDoHTML = document.querySelector("#input-titulo-todo");

//HTML input descrição ToDo
const inputDescriçãoToDoHTML = document.querySelector("#input-descrição-todo");

//HTML input data ToDo
const inputDataToDoHTML = document.querySelector("#input-data-termino");

//html input prioridade ToDo
const inputPrioridadeHTML = document.getElementsByName("prioridade");

//html input estado ToDO
const inputEstadoToDoHTML = document.getElementsByName("estado");

//html input tarefas ToDo
const inputTarefasToDoHTML = document.querySelector("#input-tarefas-todo");

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
    dataTérminoHTML.textContent = novoObjToDo[0].dataTérmino;
    descriçãoHTML.textContent = novoObjToDo[0].descrição;
    prioridadeHTML.textContent = novoObjToDo[0].prioridade;
    estadoToDoHTML.textContent = novoObjToDo[0].estado;
    tarefasToDoHTML.textContent = novoObjToDo[0].tarefas;

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



////fx para guardar edição ToDo
botãoGuardarEditarToDoHTML.addEventListener("click", (e) => {
    if(e.target)
  /*   
    ///vars para os dados do ToDo
    let títuloToDo;
    let descriçãoToDo;
    let dataTérminoToDo;
    let prioridadeToDo;
    let estadoToDo;
    let tarefasToDo;

    const títuloToDoHTML = document.querySelector(".titulo-todo");
    const dataTérminoHTML = document.querySelector(".data-todo");
    const descriçãoHTML = document.querySelector(".descrição-todo");
    const prioridadeHTML = document.querySelector(".prioridade");
    const estadoToDoHTML = document.querySelector(".estado");
    const tarefasToDoHTML = document.querySelector(".tarefas");

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

/*     ///criar o obj ToDo com os inputs
    listaToDos.push(new ToDo(títuloToDo, descriçãoToDo, dataTérminoToDo, prioridadeToDo, estadoToDo, tarefasToDo));

    ////criar o html da caixa do toDo com as propriedades do obj
    ////usar uma var nova com o obj apenas para o novo ToDo
    let novoObjToDo = listaToDos.slice(-1); */
/*     títuloToDoHTML.textContent = novoObjToDo[0].título;
    dataTérminoHTML.textContent = novoObjToDo[0].dataTérmino;
    descriçãoHTML.textContent = novoObjToDo[0].descrição;
    prioridadeHTML.textContent = novoObjToDo[0].prioridade;
    estadoToDoHTML.textContent = novoObjToDo[0].estado;
    tarefasToDoHTML.textContent = novoObjToDo[0].tarefas; */

    ////guardar os objectos
    localStorage.setItem("listaToDos", JSON.stringify(listaToDos));

   
    ////fechar o modal quando clica guardar
    formulárioCriarToDoHTML.close();

});


///fx para fechar modal editar ToDo

botãoFecharEditarToDoHTML.addEventListener("click", () => formulárioEditarToDoHTML.close());


///fx para editar ToDo (usar o event delegation porque o html do botão só é criado posteriormente)
caixaToDosHTML.addEventListener("click", (e) => {
    if (e.target.id == "botão-editar-todo") {
        inputTítuloToDoHTML.value = "";
        inputDescriçãoToDoHTML.value = "";
        inputDataToDoHTML.value = "";
        inputTarefasToDoHTML.value = "";
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




  //fx para editar conteúdos ToDo

  const editarToDo = (listaToDos) => {

 ///vars para os dados do ToDo
    let títuloToDo;
    let descriçãoToDo;
    let dataTérminoToDo;
    let prioridadeToDo;
    let estadoToDo;
    let tarefasToDo;

    const títuloToDoHTML = document.querySelector(".titulo-todo");
    const dataTérminoHTML = document.querySelector(".data-todo");
    const descriçãoHTML = document.querySelector(".descrição-todo");
    const prioridadeHTML = document.querySelector(".prioridade");
    const estadoToDoHTML = document.querySelector(".estado");
    const tarefasToDoHTML = document.querySelector(".tarefas");

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

/*     ///criar o obj ToDo com os inputs
    listaToDos.push(new ToDo(títuloToDo, descriçãoToDo, dataTérminoToDo, prioridadeToDo, estadoToDo, tarefasToDo));

    ////criar o html da caixa do toDo com as propriedades do obj
    ////usar uma var nova com o obj apenas para o novo ToDo
    let novoObjToDo = listaToDos.slice(-1); */
    títuloToDoHTML.textContent = novoObjToDo[0].título;
    dataTérminoHTML.textContent = novoObjToDo[0].dataTérmino;
    descriçãoHTML.textContent = novoObjToDo[0].descrição;
    prioridadeHTML.textContent = novoObjToDo[0].prioridade;
    estadoToDoHTML.textContent = novoObjToDo[0].estado;
    tarefasToDoHTML.textContent = novoObjToDo[0].tarefas;
  };
   