// par nome/valor
const saudacao = 'Opa' // contexto léxico 1

function exec(){
    const saudacao = 'Oi' // contexto léxico 2
    return saudacao
    
}

// Objetos são grupos aninhados de pares nome/valor  
const cliente = {
    nome: 'Fabio',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua muito legal',
        numero: 321
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)