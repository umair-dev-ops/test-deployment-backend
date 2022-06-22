const express = require("express");
const app = express();
app.get("/", (req, res) => {
    res.send("homee page");
  });
  
  app.listen(9000, (req, res) => {
    console.log(`listen 9000`);
  });