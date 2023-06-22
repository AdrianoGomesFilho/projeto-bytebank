class Cliente {
    nome;
    cpf;
}

class ContaCorrente {
    agencia;
    _saldo = 0;

    sacar(valor) {
        if (this._saldo >= valor) { //o this faz referência a própria classe "molde"
            this._saldo -= valor;
        }
    }

    depositar(valor) {
        if (valor > 0) {
            this._saldo += valor;
            console.log(this.#saldo);
        } 
    }
}

/* usar _saldo (underline na frente do atributo)
é uma convenção para dizer "não mexa, é 'privado'" não acesse ele fora da classe. Está se estudando a implementação da #saldo para privar, mas não adotaram ainda oficialmente

*/

const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf= 11122233309;

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 88822233309;

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.agencia = 1001;
contaCorrenteRicardo.depositar (100);
contaCorrenteRicardo.depositar (100);
contaCorrenteRicardo.depositar (100);
contaCorrenteRicardo.sacar(50)
console.log(contaCorrenteRicardo);

