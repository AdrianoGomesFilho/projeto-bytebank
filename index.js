import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js"
import { Conta } from "./Conta.js";

const cliente1 = new Cliente("Ricardo", 11122233309);
const cliente2 = new Cliente("Marcela", 12122233309);

const contaCorrenteRicardo = new ContaCorrente(cliente1, 1001);
const contaCorrenteMarcela = new ContaCorrente(cliente2, 1002);
console.log(contaCorrenteMarcela.saldo);
/* contaCorrenteRicardo.depositar(500);
contaCorrenteRicardo.sacar(100);

const contaPoupanca = new Conta(50, cliente1, 1001);

contaCorrenteRicardo.teste();

console.log(contaCorrenteRicardo);
console.log(ContaCorrente.numeroDeContas) */
