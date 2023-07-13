export class ContaCorrente {
    agencia;
    /** #saldo = 0 */
    _saldo = 0; // Precisamos estipular um valor

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
}