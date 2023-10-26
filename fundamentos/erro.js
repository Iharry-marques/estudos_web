function tratarErroELancar (erro){
    throw new Error('...')
}

function imprimirNome() {
  try {
    console.log(obj.name.toUpperCase() + " !!! ");
  } catch (e) {
    tratarErroELancar(e)
  } finally {
    console.log('final')
  }
}

const obj = { name: "Fabio" };
imprimirNome(obj);
