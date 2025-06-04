const express = require("express");
const PORT = 3000;
const app = express();

app.get("/test", (req, res) => {
  console.log("Test");
  res.send({ message: "Server connected ✅" });
});

app.use((err, req, res, next) => {
  //   console.log(err.message);
  res.status(500).send(err.message);
});

app.listen(PORT, () => {
  console.log(` http://localhost:${PORT} connected ✅`);
});

