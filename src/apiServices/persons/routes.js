const express = require("express");
const personController = require("./controller");

const persons = express.Router();

persons.post("/persons", personController.createPerson);

persons.get("/persons/:id", personController.getPerson);

persons.get("/persons", personController.getPersons);

persons.patch("/persons/:id", personController.updatePerson);

persons.delete("/persons/:id", personController.deletePerson);

module.exports = persons;
