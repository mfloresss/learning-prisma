const personService = require("../services/person");

class PersonController {
  async createPerson(req, res) {
    try {
      const { name, age, phone, email, pets } = req.body;
      const person = await personService.createPerson({
        data: {
          name,
          age,
          phone,
          email,
          pets,
        },
      });

      console.log({ person });
      res.status(201).json(person);
    } catch (err) {
      console.log({ err });
      res.status(500).json({ detail: err });
    }
  }
  async getPerson(req, res) {
    try {
      const { id } = req.params;
      const person = await personService.getPerson({
        where: {
          id,
        },
      });

      if (!person) {
        return res.status(404).json({ detail: "Person not found" });
      }

      console.log({ person });
      res.status(200).json(person);
    } catch (err) {
      console.log(err);
      res.status(500).json({ detail: err });
    }
  }
  async getPersons(req, res) {
    try {
      const persons = await personService.getPersons();

      if (!persons.length) {
        return res.status(404).json({ detail: "Persons not found" });
      }

      console.log({ persons });
      res.status(200).json(persons);
    } catch (err) {
      console.log(err);
      res.status(500).json({ detail: err });
    }
  }
  async updatePerson(req, res) {
    try {
      const { id } = req.params;
      const { name, age, phone, email } = req.body;
      const person = await personService.updatePerson({
        where: {
          id,
        },
        data: {
          name,
          age,
          phone,
          email,
        },
      });

      console.log({ person });
      res.status(201).json(person);
    } catch (err) {
      console.log(err);
      res.status(500).json({ detail: err });
    }
  }
  async deletePerson(req, res) {
    try {
      const { id } = req.params;
      const person = await personService.deletePerson({
        where: {
          id,
        },
      });

      console.log({ person });
      res.status(201).json(person);
    } catch (err) {
      console.log(err);
      res.status(500).json({ detail: err });
    }
  }
}

module.exports = new PersonController();
