const {
  getTodosFavoritos,
  insereFavorito,
  deletaFavoridoById,
} = require("../services/favorito");

function getFavoritos(req, res) {
  try {
    const livros = getTodosFavoritos();
    res.send(livros);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

function postFavorito(req, res) {
  try {
    const id = req.params.id;
    console.log(id);
    insereFavorito(id);
    res.status(201);
    res.send("Livro favorito inserido com sucesso!");
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

function deleteFavorito(req, res) {
  try {
    const id = req.params.id;

    if (id && Number(id)) {
      deletaFavoridoById(id);
      res.send("Livro favorito excluido com sucesso!");
    } else {
      res.status(422);
      res.send("Este item não existe");
    }
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

module.exports = {
  getFavoritos,
  postFavorito,
  deleteFavorito,
};
