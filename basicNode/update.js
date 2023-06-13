const DBConnection = require("./mongoDB");

const updateData = async () => {
  let DBName = "students";
  let collection = "grades";

  let pendingPromise = await DBConnection(DBName, collection);

  let status = await pendingPromise.updateOne(
    { grades: [95, 110, 100] },
    { $set: { subjects: ["English", "Maths", "Physics"] } }
  );
  console.log(status);
};

updateData();
