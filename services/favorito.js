const fs = require("fs");

function getTodosFavoritos() {
  return JSON.parse(fs.readFileSync("favoritos.json"));
}

function deletaFavoridoById(id) {
  const livros = JSON.parse(fs.readFileSync("favoritos.json"));

  const livroFiltrados = livros.filter((livro) => livro.id !== id);
  fs.writeFileSync("favoritos.json", JSON.stringify(livroFiltrados));
}

function insereFavorito(id) {
  const livros = JSON.parse(fs.readFileSync("livros.json"));
  const favoritos = JSON.parse(fs.readFileSync("favoritos.json"));

  const livroInserido = livros.find((livro) => livro.id === id);
  console.log(livroInserido);

  const novaListaFavoritos = [...favoritos, livroInserido];

  fs.writeFileSync("favoritos.json", JSON.stringify(novaListaFavoritos));
}

module.exports = {
  getTodosFavoritos,
  deletaFavoridoById,
  insereFavorito,
};
