//Aplicando módulos em TypeScript para evitar escopo global usando export e import

import { olaMundo, resultado, nomeInteiro } from "./exer.js";
import { exibicao } from "./bitexer.js";


//Função main para exercícios do arquivo exer.ts (curso)
(function main(): void {
    console.log(olaMundo());
    console.log(`O resultado da multiplicação é: ${resultado}.`);
    console.log(`O nome completo da pessoa é: ${nomeInteiro}.`);
})();




//Exercícios da bitexer.tsp
console.log(exibicao(' ', ' ', ' ', 0))