class Utilizadores {
  constructor(nome) {
    this.nome = nome;
  }
  
  alterarNome(novoNome) { this.nome = novoNome; }
}

const utilizador1 = new Utilizadores("Rui Araújo");


export {utilizador1};