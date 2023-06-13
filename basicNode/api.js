const express = require("express");
const DBConnection = require("./mongo DB");
const mongoDB = require("mongodb");
const app = express();
app.use(express.json());
let dbName = "students";
let collection = "grades";
app.get("/", async (req, resp) => {
  let pendingData = await DBConnection(dbName, collection);
  const data = await pendingData.find().toArray();
  resp.send(data);
});

app.post("/saveStudentData/", async (req, resp) => {
  const { grades, subjects } = req.body;

  console.log(grades, subjects);

  let pendingData = await DBConnection(dbName, collection);

  const data = await pendingData.insertOne({ grades, subjects });

  resp.sendStatus(200);
});

app.put("/updateStudentData/", async (req, resp) => {
  let pendingData = await DBConnection(dbName, collection);
  let data = await pendingData.updateOne(
    { grades: [10, 20, 30] },
    { $set: req.body }
  );
  resp.send(data).sendStatus(200);
});

app.delete("/deleteData/", async (req, resp) => {
  let pendingData = await DBConnection(dbName, collection);
  let data = await pendingData.deleteOne({
    _id: new mongoDB.ObjectId(req.query.id),
  });
  console.log(data);
  resp.send("deleted sucesssfully");
});

app.listen(8080);
