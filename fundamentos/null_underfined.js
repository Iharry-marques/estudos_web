// const a = {
//     name: 'teste'
// }
// console.log(a)

// const b = a

// console.log(b)

// b.name = 'opa'
// console.log(a)

// let c = 3
// let d = c

// d++
// console.log(c, d)

let valor; // não inicializada
console.log(valor);

valor = null; // ausência de valor
console.log(valor);
// console.log(valor.toString());  // Erro!

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evite atribuir underfined, prefira zera o valor com o null.

console.log(!!produto.preco)
// delete produto.preco
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)
