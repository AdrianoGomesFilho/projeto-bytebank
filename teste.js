class Cliente{
    constructor(nome, cpf) {
            this.nome = nome;
            this._cpf = cpf;
        }
        get cpf() {
            this._cpf;
            return this._cpf;
        }
    }
    
    const cliente2 = new Cliente("Alice", 88822233309);
    console.log(cliente2.cpf);
    