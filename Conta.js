export class Conta {
    constructor(saldoInicial, cliente, agencia) {
        if (this.constructor == Conta) {
            throw new Error("Você não poderia instanciar um objeto do tipo Conta diretamente pois ela é abstrata");
        }

        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }

    set cliente(novoValor) {
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }
    } 
    
    get cliente() {
        return this._cliente;
    } 

    get saldo() {
        return this._saldo;
    }

    sacar(valor) {
        //deixamos em branco, cada conta vai indicar a taxa
    }

    _sacar(valor, taxa) {
        const valorSacado = taxa * valor;
        if (this._saldo >= valorSacado) {
            this._saldo -= valorSacado;
            return valorSacado;
        }

        return 0;
    }

    depositar(valor) {
        this._saldo += valor;
    }

    transferir(valor, conta){
        if (this._tipo = "salario") {
            return;
        }
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}