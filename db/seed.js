const { persons, pets } = require("./data");
const { PrismaClient } = require("@prisma/client");

const db = new PrismaClient();

async function seed() {
  for (const person of persons) {
    const { name, age, phone, email, pets } = person;
    await db.person.create({
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
    });
  }
  for (const pet of pets) {
    const { name, age, breed } = pet;
    await db.pet.create({
      data: {
        name,
        age,
        breed,
      },
    });
  }
}

seed()
  .catch((err) => console.log(err))
  .finally(async () => await db.$disconnect());
