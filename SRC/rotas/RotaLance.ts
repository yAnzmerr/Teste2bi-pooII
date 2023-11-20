const express = require('express');
const router = express.Router();
const LanceController = require('../controllers/LanceController');

router.post('/lances', LanceController.criarLance);
router.get('/lances', LanceController.listarLances);

module.exports = router;