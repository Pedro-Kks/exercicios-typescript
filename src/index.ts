//Exercício 01
//Crie uma função que retorne a string "Olá, mundo!".

function olaMundo(): string {
    return "Olá, mundo!"
}

(function main(): void {
    console.log(olaMundo());
})();

//Exercício 02
//A função recebe um parâmetro do tipo number e retorna o resultado da
//multiplicação por 2.

function multiplicacao(numero1: number): number {
    return numero1 * 2;
}

const resultado: number = multiplicacao(3);
console.log(`O resultado da multiplicação é:  ${resultado}.`);

//Exercício 03
//Crie uma função que recebe duas palavras (strings) e retorna sua concatenação. De forma resumida
//deve juntar as duas palavras

function nomeCompleto(nome: string, sobrenome: string): string {
    return nome + " " + sobrenome;
}

const nomeInteiro: string = nomeCompleto("Lucas", "Ferreira");
console.log(`O nome completo da pessoa é: ${nomeInteiro}`);