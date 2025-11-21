class Cidade {
    public readonly nome: string;
  
    constructor(nome: string) {
      this.nome = nome;
    }
  }
  
  class Pessoa {
    public nome: string;
    public cidade: Cidade;
  
    constructor(nome: string, cidade: Cidade) {
      this.nome = nome;
      this.cidade = cidade;
    }
  }
  
  class Animal {
    public nome: string;
    public dono: Pessoa;
  
    constructor(nome: string, dono: Pessoa) {
      this.nome = nome;
      this.dono = dono;
    }
  }
  
  const natal = new Cidade("Natal");
  const joao = new Pessoa("João", natal);
  const toto = new Animal("Totó", joao);
  
  console.log(natal); 
  console.log(joao);  
  console.log(toto);  
