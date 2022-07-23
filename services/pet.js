const petDAO = require("../dao/pet");

class PetService {
  createPet({ data }) {
    return petDAO.createPet({ data });
  }
  getPet({ where }) {
    return petDAO.getPet({ where });
  }
  getPets() {
    return petDAO.getPets();
  }
  updatePet({ where, data }) {
    return petDAO.updatePet({ where, data });
  }
  deletePet({ where }) {
    return petDAO.deletePet({ where });
  }
}

module.exports = new PetService();
