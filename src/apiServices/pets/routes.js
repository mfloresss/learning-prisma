const express = require("express");
const petController = require("./controller");

const pets = express.Router();

pets.post("/api/pets", petController.createPet);

pets.get("/api/pets/:id", petController.getPet);

pets.get("/api/pets", petController.getPets);

pets.patch("/api/pets/:id", petController.updatePet);

pets.delete("/api/pets/:id", petController.deletePet);

module.exports = pets;
