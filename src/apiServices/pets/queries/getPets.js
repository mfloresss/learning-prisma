const { PrismaClient } = require("@prisma/client");

const db = new PrismaClient();

const getPets = async () => {
  const pets = await db.pet.findMany({
    include: {
      person: true,
    },
  });
  return pets;
};

module.exports = getPets;
