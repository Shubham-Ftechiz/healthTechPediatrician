const mongoose = require("mongoose");

const ActivityGrowthSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  Aerobics: {
    type: Number,
    required: true,
  },
  Yoga: {
    type: Number,
    required: true,
  },
  Meditation: {
    type: Number,
    required: true,
  },
});

module.exports = ActivityGrowth = mongoose.model(
  "activityGrowth",
  ActivityGrowthSchema
); // table or collection name
