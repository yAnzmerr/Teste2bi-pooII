const LeilaoService = require('../services/LeilaoService');

module.exports = {
  async criarLeilao(req, res) {
    const { produto, preco, dataLimite, donoId } = req.body;
    const leilao = await LeilaoService.criarLeilao(produto, preco, dataLimite, donoId);
    res.json(leilao);
  },

  async listarLeiloes(req, res) {
    const leiloes = await LeilaoService.listarLeiloes();
    res.json(leiloes);
  },
};