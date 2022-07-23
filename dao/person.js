const { PrismaClient } = require("@prisma/client");

const db = new PrismaClient();

class PersonDAO {
  async createPerson({ name, age, phone, email, pets }) {
    const exist = await db.person.findFirst({
      where: {
        email: email,
      },
    });

    if (exist) {
      throw "This email is already in use by a person. Please use another one.";
    }

    const person = await db.person.create({
      data: {
        name,
        age,
        phone,
        email,
        pets: {
          create:
            pets &&
            pets.map(({ name, age, breed }) => {
              return {
                name,
                age,
                breed,
              };
            }),
        },
      },
      include: {
        pets: pets ? true : false,
      },
    });

    return person;
  }

  async getPerson({ where }) {
    const person = await db.person.findUnique({
      where,
      include: {
        pets: true,
      },
    });

    return person;
  }

  async getPersons() {
    const users = await db.person.findMany({
      include: {
        pets: true,
      },
    });

    return users;
  }

  async updatePerson({ where, data }) {
    const person = await db.person.update({
      where,
      data,
    });

    return person;
  }

  async deletePerson({ where }) {
    const person = await db.person.delete({
      where,
    });

    return person;
  }
}

module.exports = new PersonDAO();
