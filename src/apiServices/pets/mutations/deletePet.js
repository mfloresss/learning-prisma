const { PrismaClient } = require("@prisma/client");

const db = new PrismaClient();

const deletePet = async ({ where }) => {
  const pet = await db.pet.delete({
    where,
  });
  return pet;
};

module.exports = deletePet;
