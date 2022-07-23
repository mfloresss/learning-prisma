const { PrismaClient } = require("@prisma/client");

const db = new PrismaClient();

const getPerson = async ({ where }) => {
  const person = await db.person.findUnique({
    where,
    include: {
      pets: true,
    },
  });

  return person;
};

module.exports = getPerson;
