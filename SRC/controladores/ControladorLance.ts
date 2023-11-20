const LanceService = require('../services/LanceService');

module.exports = {
  async criarLance(req, res) {
    const { valor, usuarioId, leilaoId } = req.body;
    const lance = await LanceService.criarLance(valor, usuarioId, leilaoId);
    res.json(lance);
  },

  async listarLances(req, res) {
    const lances = await LanceService.listarLances();
    res.json(lances);
  },
};