const express = require("express");
const app = express();
const port = 5500;

const UsersRoutes = require ('./src/routes/users')

app.use("/", UsersRoutes);

app.listen(port);
