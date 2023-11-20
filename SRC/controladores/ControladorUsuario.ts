const UsuarioService = require('../services/UsuarioService');

module.exports = {
  async criarUsuario(req, res) {
    const { nome, email } = req.body;
    const usuario = await UsuarioService.criarUsuario(nome, email);
    res.json(usuario);
  },

  async listarUsuarios(req, res) {
    const usuarios = await UsuarioService.listarUsuarios();
    res.json(usuarios);
  },
};