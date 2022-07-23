const { PrismaClient } = require("@prisma/client");

const db = new PrismaClient();

const updatePet = async ({ where, data }) => {
  const pet = await db.pet.update({
    where,
    data,
  });
  return pet;
};

module.exports = updatePet;
