require("dotenv").config();

const express = require("express");
const router = require("./routes");

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(router);

app.listen(port, () => console.log(`Server run on port: ${port}`));