const express = require('express');
const router = express.Router();
const LeilaoController = require('../controllers/LeilaoController');

router.post('/leiloes', LeilaoController.criarLeilao);
router.get('/leiloes', LeilaoController.listarLeiloes);

module.exports = router;