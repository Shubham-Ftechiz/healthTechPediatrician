const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

//const URI = `mongodb://0.0.0.0:27017/admin`; // For local db Uri

const URI = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDb is Successfully Connected");
  } catch (err) {
    console.error(err.message);
    //exit from the process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
