const DBConnection = require("./mongoDB");

const insertData = async () => {
  let DBName = "students";
  let collection = "grades";

  let pendingPromise = await DBConnection(DBName, collection);
  let status = await pendingPromise.insertOne({
    grades: [10, 0, 30],
    subjects: ["english", "math", "physics"],
  });

  console.log("status", status);
};

insertData();
