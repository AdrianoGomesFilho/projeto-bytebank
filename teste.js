class ContaCorrente {
    agencia;
    cliente;
    _saldo = 0;

    sacar(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor) {
        if (valor <= 0) {
            return;
        }
        
        this._saldo += valor;
    }
    
    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    } }
    
    const contaCorrenteRicardo = new ContaCorrente();
    const contaCorrenteAlice = new ContaCorrente();
    let valor = 200;
    contaCorrenteRicardo.agencia = 1001;
    contaCorrenteRicardo.transferir(valor, contaCorrenteAlice);
    
    console.log(valor)
    console.log(contaCorrenteAlice);