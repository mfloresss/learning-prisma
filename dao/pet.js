const { PrismaClient } = require("@prisma/client");

const db = new PrismaClient();

class PetDAO {
  async createPet({ data }) {
    const pet = await db.pet.create({
      data,
      include: {
        person: data.person ? true : false,
      },
    });
    return pet;
  }
  async getPet({ where }) {
    const pet = await db.pet.findUnique({
      where,
      include: {
        person: true,
      },
    });
    return pet;
  }
  async getPets() {
    const pets = await db.pet.findMany({
      include: {
        person: true,
      },
    });
    return pets;
  }
  async updatePet({ where, data }) {
    const pet = await db.pet.update({
      where,
      data,
    });
    return pet;
  }
  async deletePet({ where }) {
    const pet = await db.pet.delete({
      where,
    });
    return pet;
  }
}

module.exports = new PetDAO();
