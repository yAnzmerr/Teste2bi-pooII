const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = {
  criarLeilao: async (produto, preco, dataLimite, donoId) => {
    return await prisma.leilao.create({ data: { produto, preco, dataLimite, donoId } });
  },

  listarLeiloes: async () => {
    return await prisma.leilao.findMany();
  },
};