function CalcularSalario (mes, hora) {
    let salario = mes * hora
    return "O salario do funcionario é R$ " + salario
}

console.log(CalcularSalario(150, 40.5))