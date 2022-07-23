const { PrismaClient } = require("@prisma/client");

const db = new PrismaClient();

const updatePerson = async ({ where, data }) => {
  // TO DO: research to how update pets
  const person = await db.person.update({
    where,
    data,
  });

  return person;
};

module.exports = updatePerson;
