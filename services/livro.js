const fs = require("fs");

function getTodosLivros() {
  return JSON.parse(fs.readFileSync("livros.json"));
}

function getLivroById(id) {
  const livros = JSON.parse(fs.readFileSync("livros.json"));

  const livroFiltrado = livros.filter((livro) => livro.id === id)[0];

  return livroFiltrado;
}

function insereLivro(livroNovo) {
  const livros = JSON.parse(fs.readFileSync("livros.json"));

  const novaListaLivros = [...livros, livroNovo];

  fs.writeFileSync("livros.json", JSON.stringify(novaListaLivros));
}

function modificaLivro(modificacoes, id) {
  let livrosAtuais = JSON.parse(fs.readFileSync("livros.json"));

  const indiceModificado = livrosAtuais.findIndex((livro) => livro.id === id);

  const conteudoMudado = { ...livrosAtuais[indiceModificado], ...modificacoes };

  livrosAtuais[indiceModificado] = conteudoMudado;
  fs.writeFileSync("livros.json", JSON.stringify(livrosAtuais));
}

function deleteLivroById(id) {
  const livros = JSON.parse(fs.readFileSync("livros.json"));

  const livroFiltrado = livros.filter((livro) => livro.id !== id);
  fs.writeFileSync("livros.json", JSON.stringify(livroFiltrado));
}

module.exports = {
  getTodosLivros,
  getLivroById,
  insereLivro,
  modificaLivro,
  deleteLivroById,
};