import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";
import {ContaPoupanca} from "./ContaPoupanca.js";
import { ContaSalario } from "./ContaSalario.js";

const cliente1 = new Cliente("Ricardo", 11122233309);

const contaCorrenteRicardo = new ContaCorrente(cliente1, 1001);
const contaPoupancaRicardo = new ContaPoupanca(50, cliente1, 1001);
const contaSalarioRicardo = new ContaSalario(cliente1);

contaSalarioRicardo.depositar(100);
contaSalarioRicardo.sacar(10);

console.log(contaSalarioRicardo)



