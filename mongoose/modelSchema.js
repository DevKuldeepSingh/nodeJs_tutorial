const mongoose = require("mongoose");

const { Schema } = mongoose;

const studentSchema = new Schema({
  grades: { type: [Number], required: true, default: undefined },
  subjects: { type: [String], required: true, default: undefined },
  name: String,
});

const studentProfile = new Schema({
  name: { type: String },
  profilePic: { type: String },
});

module.exports = studentSchema;
module.exports = studentProfile;
