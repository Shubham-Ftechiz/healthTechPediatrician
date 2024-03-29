const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const getPediatrician = require("./routes/getPediatrician");
const connectDB = require("./config/connectDB");
const dotenv = require("dotenv");
const dashbord = require("./routes/dashboard");

const app = express();

// env file
dotenv.config();

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

// Connect to HealthTech DB
connectDB();

// Routes
getPediatrician(app);

dashbord(app);

const PORT = process.env.PORT | 5000;

app.listen(PORT, () => {
  console.log("Listening on port", PORT);
});
