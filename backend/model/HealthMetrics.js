const mongoose = require("mongoose");

const HealthMetricsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  measure: {
    type: String,
    required: true,
  },
  measureUnit: {
    type: String,
    required: true,
  },
  result: {
    type: String,
    required: true,
  },
  colour: {
    type: String,
    required: true,
  },
});

module.exports = HealthMetrics = mongoose.model(
  "healthMetrics",
  HealthMetricsSchema
); // table or collection name
