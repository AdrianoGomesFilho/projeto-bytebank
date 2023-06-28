export class Cliente {
    get cpf () {
        this._cpf;
        return this._cpf;
    }

    constructor (nome, cpf) {
        this.nome = nome;
        this._cpf = cpf;
    }
}