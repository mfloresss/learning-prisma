const express = require("express");
const petController = require("./controller");

const pets = express.Router();

pets.post("/pets", petController.createPet);

pets.get("/pets/:id", petController.getPet);

pets.get("/pets", petController.getPets);

pets.patch("/pets/:id", petController.updatePet);

pets.delete("/pets/:id", petController.deletePet);

module.exports = pets;
