const { PrismaClient } = require("@prisma/client");

const db = new PrismaClient();

const getPersons = async () => {
  const users = await db.person.findMany({
    include: {
      pets: true,
    },
  });

  return users;
};

module.exports = getPersons;
