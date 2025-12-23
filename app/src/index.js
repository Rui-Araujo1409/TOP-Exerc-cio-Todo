import Utilizadores from "./utilizadores.js";
import Projectos from "./projectos.js";
import ToDos from "./todos.js";
import "./styles.css";
import { format, compareAsc } from "date-fns";

const utilizador1 = new Utilizadores("Rui Araújo");
const utilizador2 = new Utilizadores("Joaquim Araújo");
const utilizador3 = new Utilizadores("Ana Araújo");
console.log(utilizador1);

const projecto1 = new Projectos("Projecto 1");
projecto1.adicionarUtilizadorProjecto(utilizador1.nome);
projecto1.adicionarUtilizadorProjecto(utilizador2.nome);

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

const data1 = new Date(2010, 4, 8);
const data = format(data1, "dd-MM-yyyy");
console.log(data);

