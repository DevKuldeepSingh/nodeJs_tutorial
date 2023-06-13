const express = require("express");

const app = express();
const router = express.Router();
// app
//   .route("/books")
//   .get((req, resp) => {
//     resp.send("get a random book");
//   })
//   .post((req, resp) => {
//     resp.send("Add a book");
//   })

//   .delete((req, resp) => {
//     resp.send("delete a book");
//   });

// router.use((resq, resp, next) => {
//   resp.send(Date.now());
//   next();
// });

// const myLogger = function (req, res, next) {
//   console.log(req, res);
//   console.log("LOGGED");
//   next();
// };

// // app.use(myLogger); // app level middleware

// app.get("/route", myLogger, (req, res) => {
//   res.send("Hello World!");
// });

const timehandler = (req, resp, next) => {
  req.requestTime = Date.now();
  next();
};

// app.use(timehandler);

app.get("/time", timehandler, (req, resp) => {
  let responseText = "Hello World!<br>";
  responseText += `<small>Requested at: ${req.requestTime}</small>`;
  resp.send(responseText);
});

app.listen(8080);
