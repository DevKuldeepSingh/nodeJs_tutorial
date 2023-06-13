const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

const DBConnection = async (DBName, collection) => {
  try {
    await client.connect();
    let db = client.db(DBName);
    return db.collection(collection);
  } catch (error) {
    throw new Error("connection failed", error);
  }
};

module.exports = DBConnection;
