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
  const { id, subjects, grades, name } = req.body;
  try {
    const result = await Student.findById({
      _id: new mongoDB.ObjectId(id),
    }).updateOne({}, { subjects, grades, name });
    // const result = await Student.findByIdAndUpdate(new mongoDB.ObjectId(id), {
    //   subjects,
    //   grades,
    // });

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

App.get("/searchStudentData", async (req, resp) => {
  const Student = mongoose.model("grades", studentSchema);
  const searchParams = req.query;
  console.log(searchParams);
  try {
    let query = {};
    Object.keys(searchParams).forEach((params) => {
      const value = JSON.parse(searchParams[params]);
      query[params] = { $in: value };
    });

    const result = await Student.find(query);
    resp.status(200).send(result);
  } catch (error) {
    console.log(error);
    resp.status(500).send({ error: "Search failed" });
  }
});

App.listen(8080);
