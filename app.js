const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("🚀 Node.js CI/CD App running on EC2 with Docker!");
});

app.listen(3000, () => {
  console.log("App listening on port 3000");
});
