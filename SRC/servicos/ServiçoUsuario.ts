const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = {
  criarUsuario: async (nome, email) => {
    return await prisma.usuario.create({ data: { nome, email } });
  },

  listarUsuarios: async () => {
    return await prisma.usuario.findMany();
  },
};