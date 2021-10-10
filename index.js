const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 5500;

const UsersRoutes = require("./src/routes/users");

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELLET, OPTIONS"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use("/", UsersRoutes);

app.listen(port);
