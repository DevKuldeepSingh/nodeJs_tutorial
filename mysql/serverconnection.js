var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "me",
  password: "",
  database: "my_db",
});

connection.connect((error) => {
  console.log(error);
  if (error) {
    console.log("connection failed");
  } else {
    console.log("connected sucessfully");
  }
});

// connection.query("SELECT 1 + 1 AS solution", function (error, results, fields) {
//   if (error) throw error;
//   console.log("The solution is: ", results[0].solution);
// });

// connection.end();
