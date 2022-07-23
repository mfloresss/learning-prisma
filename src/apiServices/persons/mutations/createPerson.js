const { PrismaClient } = require("@prisma/client");

const db = new PrismaClient();

const createPerson = async ({ data }) => {
  if (data.email) {
    const exist = await db.person.findFirst({
      where: {
        email: data.email,
      },
    });
    if (exist) {
      throw "This email is already in use by a person. Please use another one.";
    }
  }

  const person = await db.person.create({
    data: {
      ...data,
      pets: {
        create:
          data.pets &&
          data.pets.map(({ name, age, breed }) => {
            return {
              name,
              age,
              breed,
            };
          }),
      },
    },
    include: {
      pets: data.pets ? true : false,
    },
  });

  return person;
};

module.exports = createPerson;
