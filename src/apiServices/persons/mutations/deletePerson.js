const { PrismaClient } = require("@prisma/client");

const db = new PrismaClient();

const deletePerson = async ({ where }) => {
  const person = await db.person.delete({
    where,
  });

  return person;
};

module.exports = deletePerson;
