const express = require("express");
const dbConnection = require("./dbconnection");
const App = express();
dbConnection();
App.listen(8081);

module.exports = App;
