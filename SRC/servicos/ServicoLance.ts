const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = {
  criarLance: async (valor, usuarioId, leilaoId) => {
    return await prisma.lance.create({ data: { valor, usuarioId, leilaoId } });
  },

  listarLances: async () => {
    return await prisma.lance.findMany();
  },
};