const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite o tamanho do liquidificador: ', (tamanho) => {
  rl.question('Digite a fruta: ', (fruta) => {
    const combinacao = tamanho + fruta;
    console.log(combinacao);
    rl.close();
  });
});
