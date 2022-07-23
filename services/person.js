const personDAO = require("../dao/person");

class PersonService {
  createPerson({ data }) {
    const { name, age, phone, email, pets } = data;
    return personDAO.createPerson({ name, age, phone, email, pets });
  }
  getPerson({ where }) {
    return personDAO.getPerson({ where });
  }
  getPersons() {
    return personDAO.getPersons();
  }
  updatePerson({ where, data }) {
    return personDAO.updatePerson({ where, data });
  }
  deletePerson({ where }) {
    return personDAO.deletePerson({ where });
  }
}

module.exports = new PersonService();
