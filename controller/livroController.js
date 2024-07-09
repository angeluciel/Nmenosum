const Livro = require('../models/livro');

exports.getAll = (req, res) => {
    Livro.getAll((err, results) => {
        if (err) res.status(500).send(err);
        res.json(results);
    });
};

exports.getById = (req, res) => {
    Livro.getById(req.params.id, (err, result) => {
        if (err) res.status(500).send(err);
        res.json(result);
    });
};

exports.create = (req, res) => {
    const newLivro = req.body;
    Livro.create(newLivro, (err, result) => {
        if (err) res.status(500).send(err);
        res.json(result);
    });
};

exports.update = (req, res) => {
    const updatedLivro = req.body;
    Livro.update(req.params.id, updatedLivro, (err, result) => {
        if (err) res.status(500).send(err);
        res.json(result);
    });
};

exports.delete = (req, res) => {
    Livro.delete(req.params.id, (err, result) => {
        if (err) res.status(500).send(err);
        res.json(result);
    });
};