const persons = [
  {
    name: "Michael",
    age: 17,
    phone: "094749027",
    email: "micha@gmail.com",
    pets: [
      {
        name: "Pedrito",
        age: 7,
        breed: "Caniche",
      },
    ],
  },
  {
    name: "Jose",
    age: 12,
    phone: "094323424",
    email: null,
    pets: [
      {
        name: "Jaun",
        age: 2,
        breed: "Pitbull",
      },
    ],
  },
  {
    name: "Mujica",
    age: 54,
    phone: null,
    email: null,
  },
];

const pets = [
  {
    name: "Negro",
    age: 2,
    breed: "Pitbull",
  },
  {
    name: "Pipe",
    age: 8,
    breed: "Salchicha",
  },
  {
    name: "Coscu",
    age: 10,
    breed: null,
  },
];

module.exports = { persons, pets };
