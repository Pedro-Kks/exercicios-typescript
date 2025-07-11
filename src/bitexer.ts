//Cadastro de Recrutas
//Escreva um programa em javascript que permita salvar informações de um recruta.
//As informações a serem salvas são:

//Primeiro nome, o sobrenome, o campo de estudo, o ano de nascimento

//Depois o programa deve exibir o nome completo do recruta,
//seu campo de estudo e sua idade (apenas baseada no ano de nascimento).

//importação da biblioteca
import promptSync from 'prompt-sync';
const prompt = promptSync();


export function exibicao(nome: string, sobrenome: string, campoDeEstudo: string, anoDeNascimento: number): string {
    nome = prompt('Digite seu primeiro nome: ');
    sobrenome = prompt('Digite seu sobrenome: ');
    campoDeEstudo = prompt('Digite seu campo de estudo: ');
    anoDeNascimento = Number(prompt('Digite seu ano de nascimento: '));


    const idade: number = new Date().getFullYear() - anoDeNascimento;
    return `O nome completo é: ${nome} ${sobrenome}.\nCampo de estudo: ${campoDeEstudo}.\nAno de nascimento: ${anoDeNascimento}.\nEntão sua idade é: ${idade}.`;
}

//Crie uma função que recebe duas palavras (strings) e retorna sua concatenação. De forma resumida,
//deve juntar as duas palavras

export function stringsJuntas(palavra1: string, palavra2: string): string {
    return `${palavra1} ${palavra2}`;
}

