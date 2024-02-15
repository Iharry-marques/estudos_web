const calcular = document.getElementById("calcular");

function imc() {
  const nome = document.getElementById("nome").value;
  const altura = parseFloat(document.getElementById("altura").value);
  const peso = parseFloat(document.getElementById("peso").value);
  const resultado = document.getElementById("resultado");

  if (nome !== "" && altura !== "" && peso !== "") {
    const imc = (peso / (altura * altura)).toFixed(2);

    let classificacao = "";

    if (imc < 18.5) {
        classificacao = 'abaixo do peso';
      } else if (imc >= 18.5 && imc < 25) {
        classificacao = 'com peso normal';
      } else if (imc >= 25 && imc < 30) {
        classificacao = 'com sobrepeso';
      } else {
        classificacao = 'obeso';
      }
    resultado.textContent = `${nome} seu imc é ${imc} e você esta ${classificacao}`;
  } else {
    resultado.textContent = "Preencha todos os campos";
  }
}

calcular.addEventListener("click", imc);
