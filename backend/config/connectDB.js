const mongoose = require("mongoose");

//const URI = `mongodb://0.0.0.0:27017/admin`;
const URI = `mongodb+srv://Shubham:Shubham2023@healthteach.s0qt1sy.mongodb.net/?retryWrites=true&w=majority`;

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
