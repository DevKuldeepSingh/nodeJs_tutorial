const mongoose = require("mongoose");

const url = "mongodb://localhost:27017/students";

const dbConnection = async () => {
  try {
    await mongoose.connect(url);
  } catch (error) {
    throw new Error("Connection failed");
  }
};
module.exports = dbConnection;
