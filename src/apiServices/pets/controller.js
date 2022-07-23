const createPet = require("./mutations/createPet");
const deletePet = require("./mutations/deletePet");
const updatePet = require("./mutations/updatePet");
const getPet = require("./queries/getPet");
const getPets = require("./queries/getPets");

class PetController {
  async createPet(req, res) {
    try {
      const { name, age, breed } = req.body;
      const pet = await createPet({
        data: {
          name,
          age,
          breed,
        },
      });

      console.log({ pet });
      res.status(201).json(pet);
    } catch (err) {
      console.log(err);
      res.status(500).json({ detail: err });
    }
  }
  async getPet(req, res) {
    try {
      const { id } = req.params;
      const pet = await getPet({
        where: {
          id,
        },
      });

      if (!pet) {
        return res.status(404).json({ detail: "Pet not found" });
      }

      console.log({ pet });
      res.status(200).json(pet);
    } catch (err) {
      console.log(err);
      res.status(500).json({ detail: err });
    }
  }
  async getPets(req, res) {
    try {
      const pets = await getPets();

      if (!pets.length) {
        return res.status(404).json({ detail: "Pets not found" });
      }

      console.log({ pets });
      res.status(200).json(pets);
    } catch (err) {
      console.log(err);
      res.status(500).json({ detail: err });
    }
  }
  async updatePet(req, res) {
    try {
      const { id } = req.params;
      const { name, age, breed } = req.body;
      const pet = await updatePet({
        where: {
          id,
        },
        data: {
          name,
          age,
          breed,
        },
      });

      console.log({ pet });
      res.status(200).json(pet);
    } catch (err) {
      console.log(err);
      res.status(500).json({ detail: err });
    }
  }
  async deletePet(req, res) {
    try {
      const { id } = req.params;
      const pet = await deletePet({
        where: {
          id,
        },
      });
      console.log({ pet });
      res.status(200).json(pet);
    } catch (err) {
      console.log(err);
      res.status(500).json({ detail: err });
    }
  }
}

module.exports = new PetController();
