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

const listaPessoas = [];

listaPessoas.push(new Pessoa("Joao", "joao@gmail.com", 20));
listaPessoas.push(new Pessoa("Maria", "maria@gmail.com", 25));
listaPessoas.push(new Pessoa("Pedro", "pedro@gmail.com", 23));
listaPessoas.push(new Pessoa("Paulo", "paulo@gmail.com", 31));
listaPessoas.push(new Pessoa("José", "jose@gmail.com", 18));

console.log(listaPessoas)

listaPessoas.forEach((p, i) => {
  console.log(`Nome na Posição ${i}: ${p.nome}`)
})