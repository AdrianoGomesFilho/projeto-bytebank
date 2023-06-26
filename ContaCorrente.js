export class ContaCorrente {
    agencia;
    cliente;


    _saldo = 0;

    sacar(valor) {
        if (this._saldo >= valor) { //o this faz referência a própria classe "molde"
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor) {
        if (valor <= 0)
        {
        return;
        }
        this._saldo += valor;
    }
    transferir(valor, conta) {
        conta.cidade = "São Paulo";
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
        valor = 20;
    }
}


/* usar _saldo (underline na frente do atributo)
é uma convenção para dizer "não mexa, é 'privado'" não acesse ele fora da classe. Está se estudando a implementação da #saldo para privar, mas não adotaram ainda oficialmente
*/