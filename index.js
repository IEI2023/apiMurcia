const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Endpoint para leer JSON pasado en el body
app.post("/jsonFromBody", (req, res) => {
  const jsonData = req.body;
  res.json(jsonData);
});

app.get("/jsonFromFile", (req, res) => {
  try {
    const filePath = "data/centros.json";
    const data = fs.readFileSync(filePath, "utf8");
    res.json(JSON.parse(data));
  } catch (err) {
    return res.status(500).json({ error: err });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
