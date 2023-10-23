// novo recurso do ES2015

const pessoa = {
    nome: 'Fabio',
    idade: 24,
    endereco: {
        logadouro: 'Rua Cload',
        numero: 324
    }
}

const { nome, idade} = pessoa
console.log(nome, idade)

const {nome: n, idade: i} = pessoa
console.log(n, i)

const { sobrenome, bemHumarada = true} = pessoa
console.log(sobrenome, bemHumarada)

const { endereco: { logadouro, numero, cep } } = pessoa
console.log(logadouro, numero, cep)

//const { conta: { ag, num } } = pessoa
//console.log(ag, num)
