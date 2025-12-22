/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utilizadores_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilizadores.js */ \"./src/utilizadores.js\");\n/* harmony import */ var _projectos_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectos.js */ \"./src/projectos.js\");\n/* harmony import */ var _todos_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todos.js */ \"./src/todos.js\");\n\n\n\n\nconst utilizador1 = new _utilizadores_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"Rui Araújo\");\nconst utilizador2 = new _utilizadores_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"Joaquim Araújo\");\nconst utilizador3 = new _utilizadores_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"Ana Araújo\");\nconsole.log(utilizador1);\n\nconst projecto1 = new _projectos_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"Projecto 1\");\nprojecto1.adicionarUtilizadorProjecto(utilizador1.nome);\n\nconst projecto2 = new _projectos_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"Projecto 2\");\n\n\n\n\nconst todo1 = new _todos_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\"Todo 1\", \"descrição\", \"13/12/2025\", 1, \"activo\", \"notas\");\n\nconst todo2 = new _todos_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\"Todo 2\", \"descrição\", \"data\", 0, \"inactivo\", \"notas\");\n\n\nconsole.log(projecto1);\nconsole.log(todo1);\nconsole.log(todo2);\nprojecto1.adicionarToDos(todo1);\nconsole.log(projecto1);\n\n\ntodo1.adicionarTarefa(\"tarefa1\");\ntodo1.adicionarTarefa(\"tarefa2\");\ntodo1.adicionarTarefa(\"tarefa3\");\ntodo1.adicionarTarefa(\"tarefa4\");\nconsole.log(todo1);\ntodo1.retirarTarefa(\"tarefa3\");\nconsole.log(todo1);\n\n\nconst dataFormatar = todo1.dataTérmino.split(\"/\");\nconsole.log(dataFormatar);\nconst dataObj = new Date(dataFormatar[2], dataFormatar[1]-1, dataFormatar[0]);\nconsole.log(dataObj.getDate());\nconsole.log(dataObj.getMonth()+1);\nconsole.log(dataObj.getFullYear());\n\ntodo1.alterarDescrição(\"Nova descrição\");\ntodo1.alterarNotas(\"Nova nota\");\ntodo1.alterarTítuloToDo(\"Novo título\");\nprojecto1.alterarTítuloProjecto(\"Novo título\");\nconsole.log(projecto1);\n\n//# sourceURL=webpack://app/./src/index.js?\n}");

/***/ },

/***/ "./src/projectos.js"
/*!**************************!*\
  !*** ./src/projectos.js ***!
  \**************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Projectos)\n/* harmony export */ });\nclass Projectos {\n  constructor(título, utilizadores, todos){\n    this.título = título;\n  this.utilizadores = [];\n    this.todos = [];\n  } \n  \n  alterarTítuloProjecto(novoTítulo) {\n    this.título = novoTítulo;\n  }\n  \n    adicionarUtilizadorProjecto(utilizador) {this.utilizadores.push(utilizador);}\n  \n  retirarUtilizadorProjecto(utilizador) {\n    let index = this.utilizadores.findIndex(elemento => elemento == utilizador);\n  this.utilizadores.splice(index,1);\n  }\n  \n  adicionarToDos(todo) { this.todos.push(todo); }\n  \n   retirarTodos(todo) {\n    let index = this.todos.findIndex(elemento => elemento == todo);\n  this.utilizadores.splice(index,1);\n  }\n  \n}\n\n//# sourceURL=webpack://app/./src/projectos.js?\n}");

/***/ },

/***/ "./src/todos.js"
/*!**********************!*\
  !*** ./src/todos.js ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ToDos)\n/* harmony export */ });\nclass ToDos {\n  constructor(título, descrição, dataTérmino, prioridade, estado, notas, tarefas) {\n    this.título = título\n  this.descrição = descrição;\n  this.dataTérmino = dataTérmino;\n  this.prioridade = prioridade;\n    this.estado = estado;\n  this.notas = notas;\n    this.tarefas = [];\n  }\n  \n  alterarPrioridade(valor) {\n    this.prioridade = valor;\n  }\n  \n  alterarEstado() {\nthis.estado == \"activo\" ? this.estado = \"inactivo\" : this.estado = \"activo\";\n  }\n  \n  alterarDataTérmino(data) {\n    this.dataTérmino = data;\n  }\n  \n  alterarTítuloToDo(novoTítulo) {\n    this.título = novoTítulo;\n  }\n  \n  alterarDescrição(novaDescrição) {\n    this.descrição = novaDescrição;\n  }\n  \n  alterarNotas(novaNotas) {\n    this.notas = novaNotas;\n  }\n  \n  adicionarTarefa(tarefa) { this.tarefas.push(tarefa); }\n  retirarTarefa(tarefa) {\n    let index = this.tarefas.findIndex(elemento => elemento == tarefa);\n  this.tarefas.splice(index,1);\n  }\n \n}\n\n//# sourceURL=webpack://app/./src/todos.js?\n}");

/***/ },

/***/ "./src/utilizadores.js"
/*!*****************************!*\
  !*** ./src/utilizadores.js ***!
  \*****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Utilizadores)\n/* harmony export */ });\nclass Utilizadores {\n  constructor(nome) {\n    this.nome = nome;\n  }\n  \n  alterarNome(novoNome) { this.nome = novoNome; }\n};\n\n\n//# sourceURL=webpack://app/./src/utilizadores.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Check if module exists (development only)
/******/ 		if (__webpack_modules__[moduleId] === undefined) {
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;