const DBConnection = require("./mongoDB");

const fetchData = async () => {
  try {
    let DBName = "students";
    let collection = "grades";

    const pendingData = await DBConnection(DBName, collection);
    const data = await pendingData.find().toArray();
    console.log(data);
  } catch (error) {
    throw new Error("something wrong");
  }
};

fetchData();
