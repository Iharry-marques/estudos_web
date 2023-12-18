const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

for (i in notas) {
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Fabio',
    sobrenome: 'Marques',
    idade: 24,
    peso: 72
}

for(atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}

// const pessoa = {
//     nome: 'João',
//     idade: 30,
//     cidade: 'São Paulo'
//   };
  
//   for (let chave in pessoa) {
//     console.log(chave + ': ' + pessoa[chave]);
//   }