const express = require("express");
const app = express();
const port = 5500;

app.use(() => {
  console.log("Hello Juga...");
});

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port port!`));
