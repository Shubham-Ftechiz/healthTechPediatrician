const mongoose = require("mongoose");

const getBodypartsSchema = new mongoose.Schema({
  parts: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
});

module.exports = BodyParts = mongoose.model("bodyParts", getBodypartsSchema); // table or collection name
