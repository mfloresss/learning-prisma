const { PrismaClient } = require("@prisma/client");

const db = new PrismaClient();

const createPet = async ({ data }) => {
  const pet = await db.pet.create({
    data,
    include: {
      person: data.person ? true : false,
    },
  });
  return pet;
};

module.exports = createPet;
