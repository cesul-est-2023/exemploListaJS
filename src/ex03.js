class Pessoa {
  nome = "";
  email = "";
  idade = 0;

  constructor(nome, email, idade) {
    this.nome = nome;
    this.email = email;
    this.idade = idade;
  }
}

const p = new Pessoa();
p.nome = "Aparicio";
p.email = "aparicio@gmail.com";
p.idade = 22;

console.log(p);

const p1 = new Pessoa("Maria", "maria@gmail.com", 20);
const p2 = new Pessoa("Pedro", "pedro@gmail.com", 35);

console.log(p1);
console.log(p2);