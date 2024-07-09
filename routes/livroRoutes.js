const express = require('express');
const router = express.Router();
const livroController = require('../controller/livroController');

router.get('/', livroController.getAll);
router.get('/:id', livroController.getById);
router.post('/', livroController.create);
router.put('/:id', livroController.update);
router.delete('/:id', livroController.delete);

module.exports = router;