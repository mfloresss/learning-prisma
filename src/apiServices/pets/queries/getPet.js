const { PrismaClient } = require("@prisma/client");

const db = new PrismaClient();

const getPet = async ({ where }) => {
  const pet = await db.pet.findUnique({
    where,
    include: {
      person: true,
    },
  });
  return pet;
};

module.exports = getPet;
