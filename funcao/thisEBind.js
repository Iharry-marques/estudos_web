const pessoa = {
  saudacao: "Bom dia",
  falar() {
    console.log(this.saudacao);
  }
}

pessoa.falar();
const falar = pessoa.falar;

falar(); // Conflio enre paradigimas: funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa);

falarDePessoa()
