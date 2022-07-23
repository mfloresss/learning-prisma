const express = require("express");
const personController = require("../controllers/person");
const petController = require("../controllers/pet");

const router = express.Router();

router.post("/persons", personController.createPerson);

router.get("/persons/:id", personController.getPerson);

router.get("/persons", personController.getPersons);

router.put("/persons/:id", personController.updatePerson);

router.delete("/persons/:id", personController.deletePerson);


router.post("/pets", petController.createPet);

router.get("/pets/:id", petController.getPet);

router.get("/pets", petController.getPets);

router.put("/pets/:id", petController.updatePet);

router.delete("/pets/:id", petController.deletePet);

module.exports = router;
