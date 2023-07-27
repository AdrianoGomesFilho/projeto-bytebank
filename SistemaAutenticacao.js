/* Ser autenticavel significa ter um método autenticar */

export class SistemaAutenticacao {
    static login(autenticavel, senha) {
        if (SistemaAutenticacao.ehAutenticavel(autenticavel)){
            return autenticavel.autenticar(senha); //Aqui ele cospe a senha, se verdadeiro. Ele verifica se o cliente/diretor/gerente possuem o método "autenticar(senha)"
        }
            return false;
        }

    static ehAutenticavel(autenticavel) {
          return "autenticar" in autenticavel && autenticavel.autenticar instanceof Function;
        }
    }