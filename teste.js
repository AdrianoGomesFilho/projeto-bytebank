class Produto {
    constructor(nomeEscolhido, precoEscolhido){
    this.nome = nomeEscolhido;
    this.preco = precoEscolhido;
    }
    calculaDesconto(preco) {
    return this.preco * 0.1;
    }
    }
    var produto1 = new Produto('Blusa', 120);
    var produto2 = new Produto('Blusa', 300);
    produto1.calculaDesconto();
    produto2.calculaDesconto();