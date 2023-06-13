const mongoose = require("mongoose");

const { Schema } = mongoose;

const studentSchema = new Schema({
  grades: { type: [Number], required: true, default: undefined },
  // grades: [Number],
  subjects: { type: [String], required: true, default: undefined },
});

module.exports = studentSchema;
