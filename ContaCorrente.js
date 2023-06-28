import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    static numeroDeContas = 0;

    set cliente(novoValor) {
        if(novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }
       
    } 

    get cliente() {
        return this._cliente;
    }

    get saldo() {
        return this._saldo;
    }

    constructor (agencia, cliente) {
        this.agencia = agencia;
        this.cliente = cliente;
        this._saldo = 0;
        ContaCorrente.numeroDeContas += 1;
    }

    sacar(valor) {
        if (this._saldo >= valor) { //o this faz referência a própria classe "molde"
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor) {
        if (valor <= 100)
        {
        return;
        }
        this._saldo += valor;
    }
    transferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}


/* usar _saldo (underline na frente do atributo)
é uma convenção para dizer "não mexa, é 'privado'" não acesse ele fora da classe. Está se estudando a implementação da #saldo para privar, mas não adotaram ainda oficialmente
*/