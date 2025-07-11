//Exercício 01
//Crie uma função que retorne a string "Olá, mundo!".

export function olaMundo(): string {
    return "Olá, mundo!";
}

//Exercício 02
//A função recebe um parâmetro do tipo number e retorna o resultado da
//multiplicação por 2.

function multiplicacao(numero1: number): number {
    return numero1 * 2;
}

export const resultado: number = multiplicacao(3);


//Exercício 03
//Crie uma função que recebe duas palavras (strings) e retorna sua concatenação. De forma resumida
//deve juntar as duas palavras

function nomeCompleto(nome: string, sobrenome: string): string {
    return nome + " " + sobrenome;
}


export const nomeInteiro: string = nomeCompleto("Lucas", "Ferreira");

//Exercício 03
//Crie uma função que recebe duas palavras (strings) e retorna sua concatenação. De forma resumida,
//deve juntar as duas palavras

export function stringsJuntas(palavra1: string, palavra2: string): string {
    return `${palavra1} ${palavra2}`;
}