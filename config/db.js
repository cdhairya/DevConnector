const mongoose = require("mongoose");
const config = require("config");

const connectionUrl = config.get("mongoURI");

const connectDB = async () => {
  try {
    await mongoose.connect(connectionUrl, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Connected...");
  } catch (err) {
    console.error(err.message);
    // Exit the process
    process.exit(1);
  }
};

module.exports = connectDB;
