// Crie um programa que imprima "Olá, mundo!" no console.
console.log("Olá Mundo")

// Escreva uma função que receba dois números como parâmetros e retorne a soma deles.
function soma (a, b) {
    return a + b
}
console.log(soma(2,3))

// Desenvolva um programa que verifique se um número é par ou ímpar.
let numero = 10

if (numero % 2 === 0) {
    console.log("O numero é par")
} else {
    console.log("O numero é impar")
}

//Desafio 3: Contagem regressiva
//Este desafio requer um pouco mais de conhecimento sobre loops. O objetivo é exibir uma contagem regressiva na tela, começando em 10 e terminando em 0.

for (let i = 10; i >=0; i--) {
    console.log(i)
}

// Desafio 4: Jogo da adivinhação
// Este desafio é um pouco mais desafiador, pois requer um pouco de lógica de programação. O objetivo é criar um jogo da adivinhação, onde o computador gera um número aleatório e o jogador tenta adivinhá-lo.

// Desafio 4: Jogo da adivinhação

const numeroAleatorio = Math.floor(Math.random() * 100);

let chute = 0;

while (chute !== numeroAleatorio) {
  console.log("Digite um número entre 1 e 100:");
  chute = Number(input());

  if (chute > numeroAleatorio) {
    console.log("O número é menor.");
  } else if (chute < numeroAleatorio) {
    console.log("O número é maior.");
  }
}

console.log("Parabéns, você acertou!");

