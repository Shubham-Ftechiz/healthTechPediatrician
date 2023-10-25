const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const getPediatrician = require("./routes/getPediatrician");

const app = express();

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(express.static("public"));

// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());

// Use express to parse JSON
app.use(express.json());

// Enabling cors for all request
app.use(cors());

// defining test APIs endpoints
app.get("/", (req, res) => {
  res.send({
    message: "Testing APIs for healthTech",
  });
});

// Routes
getPediatrician(app);

const PORT = process.env.PORT | 5000;

app.listen(PORT, () => {
  console.log("Listening on port", PORT);
});
