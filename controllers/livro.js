const {
  getTodosLivros,
  getLivroById,
  insereLivro,
  modificaLivro,
  deleteLivroById,
} = require("../services/livro");

function getLivros(req, res) {
  try {
    const livros = getTodosLivros();
    res.send(livros);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

function getLivro(req, res) {
  try {
    const id = req.params.id;

    if (id && Number(id)) {
      const livro = getLivroById(id);
      res.send(livro);
    } else {
      res.status(422);
      res.send("Este item não existe");
    }
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

function postLivro(req, res) {
  try {
    const livroNovo = req.body;
    if (req.body.nome && req.body.id) {
      insereLivro(livroNovo);
      res.status(201);
      res.send("Livro inserido com sucesso!");
    } else {
      res.status(422);
      res.send("Nome do livro é obrigatório");
    }
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

function pacthLivro(req, res) {
  try {
    const id = req.params.id;

    if (id && Number(id)) {
      modificaLivro(body, id);
      const body = req.body;
      res.status(201);
      res.send("Livro alterado com sucesso!");
    } else {
      res.status(422);
      res.send("ID inválido!");
    }
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

function deleteLivro(req, res) {
  try {
    const id = req.params.id;

    if (id && Number(id)) {
      deleteLivroById(id);
      res.send("Livro excluido com sucesso!");
    } else {
      res.status(422);
      res.send("Este item não existe");
    }
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

module.exports = { getLivros, getLivro, postLivro, pacthLivro, deleteLivro };
