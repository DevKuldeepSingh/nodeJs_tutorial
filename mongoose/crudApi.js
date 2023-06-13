const express = require("express");
const mongoose = require("mongoose");
const studentSchema = require("./modelSchema");

const mongoDB = require("mongodb");
const App = require("./server");

App.use(express.json());
App.get("/getstudentbyid/:id", async (req, resp) => {
  const Student = mongoose.model("grades", studentSchema);
  const studentID = req.params.id; // Use req.params to access the ID from the URL path
  try {
    const student = await Student.findById(new mongoDB.ObjectId(studentID));
    console.log(student);
    if (student) {
      resp.status(200).send(student);
    } else {
      resp.status(404).send({ error: "User not found" });
    }
  } catch (error) {
    resp.status(500).send({ error: "Internal server error" });
  }
});

App.put("/addStudentData", async (req, resp) => {
  const Student = mongoose.model("grades", studentSchema);

  console.log(req.body);
  try {
    await Student.create(req.body);
    resp.status.send("create sucessfully");
  } catch (error) {
    resp.status(400).send(error.message);
  }
});

App.post("/updateStudentData", async (req, resp) => {
  const Student = mongoose.model("grades", studentSchema);
  const { id, subjects, grades } = req.body;
  try {
    const result = await Student.findById({
      _id: new mongoDB.ObjectId(id),
    }).updateOne({}, { subjects, grades });
    if (
      result.acknowledged &&
      (result.modifiedCount === 1 || result.matchedCount === 1)
    ) {
      resp.status(200).send("update sucessfully");
    } else {
      resp.status(404).send("user not found");
    }
  } catch (error) {
    resp.status(500).send("update sucessfully");
  }
});

App.delete("/deleteStudent/:id", async (req, resp) => {
  const Student = mongoose.model("grades", studentSchema);
  const studentID = req.params.id;
  try {
    const result = await Student.findByIdAndDelete(
      new mongoDB.ObjectId(studentID)
    );
    if (result) {
      resp.status(200).send("delete sucessfully");
    } else {
      resp.status(404).send("user not found");
    }
  } catch (error) {
    resp.status(500).send("internal server error");
  }
});

App.listen(8080);
