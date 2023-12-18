// Armazenando uma função em uma váriavel

const imprimirSoma = function (a, b) {
  console.log(a + b);
};

imprimirSoma(2, 3);

// Armazenando uma função arrow em uma váriavel
const soma = (a, b) => {
  return a + b;
};

console.log(soma(2, 3));

// Retorno implícito
const subtracao = (a, b) => a - b;
console.log(subtracao(3, 5));

const imprimir2 = a => console.log(a);
imprimir2("Oi, sextou");
