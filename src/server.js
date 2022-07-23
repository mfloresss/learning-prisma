const app = require("express")();
const bodyParser = require("express").json;
const routers = require("./routes/index.routes");

// For accepting post form data
app.use(bodyParser());
app.use(routers);

module.exports = app;
