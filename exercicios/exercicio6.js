function inverso(valor) {
    // Verifica se o valor é do tipo booleano
    if (typeof valor === "boolean") {
      // Retorna o inverso do valor booleano
      return !valor;
    }
    // Verifica se o valor é do tipo numérico
    else if (typeof valor === "number") {
      // Retorna o inverso do valor numérico
      return -valor;
    }
    // Se o valor não for de nenhum dos tipos esperados, retorna uma mensagem de erro
    else {
      // Retorna uma string com o tipo do valor fornecido
      return `Booleano ou número esperados, mas o parâmetro é do tipo ${typeof valor}`;
    }
  }


  console.log(inverso(true))