const db = require('../config/db');

const Livro = {
    getAll: (callback) => {
        db.query('SELECT * FROM livro', callback);
    },
    getById: (id, callback) => {
        db.query('SELECT * FROM livro WHERE ISBN = ?', [id], callback);
    },
    create: (category, callback) => {
        db.query('INSERT INTO livro SET ?', category, callback);
    },
    update: (id, category, callback) => {
        db.query('UPDATE livro SET ? WHERE ISBN = ?', [category, id], callback);
    },
    delete: (id, callback) => {
        db.query('DELETE FROM livro WHERE ISBN = ?', [id], callback);
    }
};

module.exports = Livro;