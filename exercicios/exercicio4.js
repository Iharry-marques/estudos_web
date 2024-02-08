function nomeDoMes (numero) {
    const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    if (numero >= 1 && numero <= 12 ) {
        return meses[numero - 1]
    } else {
        console.log("Numero Invalido")
    }
}

console.log(nomeDoMes(2))
console.log(nomeDoMes(12))
