import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    agencia;
    _cliente;
    
    set cliente(novoValor) {
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }
    } 
    
    get cliente() {
        return this._cliente;
    } 

    //o cliente é sem underline, pois é pelo nome cliente que chamaremos no index
    
    _saldo = 0; // Precisamos estipular um valor
    
    atribuirCliente() {
    }

    sacar(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor) {
        if (valor <= 0) {
            return; //para a execução do resto do método
        }
        
        this._saldo += valor;
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}