//Aplicando módulos em TypeScript para evitar escopo global usando export e import

import { olaMundo, resultado, nomeInteiro, stringsJuntas } from "./exer.js";

//Função main para exercícios do arquivo exer.ts (curso)
(function main(): void {
    //Exercício 01
    console.log(olaMundo());
    //Exercício 02
    console.log(`O resultado da multiplicação é: ${resultado}.`);
    //Exercício 03
    console.log(`O nome completo da pessoa é: ${nomeInteiro}.`);
    //Exercício 04
    console.log(stringsJuntas("Eu", "Amei!"))
})();