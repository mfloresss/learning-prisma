const express = require("express");
const personController = require("./controller");

const persons = express.Router();

persons.post("/api/persons", personController.createPerson);

persons.get("/api/persons/:id", personController.getPerson);

persons.get("/api/persons", personController.getPersons);

persons.patch("/api/persons/:id", personController.updatePerson);

persons.delete("/api/persons/:id", personController.deletePerson);

module.exports = persons;
