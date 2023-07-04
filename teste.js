class Pessoa {
  constructor(nome, idade, sexo) {
     this.nome = nome;
     this.idade = idade;
     this.sexo = sexo;
  }
}

class Matheus extends Pessoa {
  constructor(nomeDiferente, algumaIdade, meuSobrenome) {
     super(nomeDiferente, algumaIdade);  //As variáveis têm nomes diferentes da classe pai, mas funcionam como uma função normalmente.
     // Cuidado: como não foi passado um terceiro parâmetro, o atributo 'sexo' dos objetos instanciados terão seu conteúdo como "undefined"
     this.sobrenome = meuSobrenome;
  }
}

console.log(Matheus.meuSobrenome)