const express = require("express");
const path = require("path");
const app = express();

app.set("view engine", "ejs");

app.get("", (req, res) => {
  console.log(req.query);
  res.send(`<h1>hello frist home using express.js</h1>
  <a href="/about">go to about page</a>
  `);
});

app.get("/about", (req, res) => {
  res.send(`<h1>thanks for visiting our site,</h1>
  <a href="/">go to home page</a>
  `);
});

app.get("/contact", (req, res) => {
  res.send(
    `<input type='text' placholder="leave your message"/> <button>submit</button>`
  );
});

// const publicPath = path.join(__dirname, "OsteoArthritis.png");

// console.log(publicPath);

app.use(
  "/codepush",
  express.static("/Users/kuldeepsingh/Desktop/codepush.png")
);

app.get("/users/:useid/books/:bookid", (req, resp) => {
  resp.send(req.params);
});

app.get("/users/:from-:to", (req, resp) => {
  resp.send(req.params);
});
app.get("/users/plantae/:genus.:species", (req, resp) => {
  resp.send(req.params);
});

const cb0 = function (req, res, next) {
  console.log("CB0");
  next();
};

const cb1 = function (req, res, next) {
  console.log("CB1");
  next();
};

const cb2 = function (req, res) {
  res.send("Hello from C!");
};

app.get("/example/c", [cb0, cb1, cb2]);

app.get("/profile/userId/:userid", (req, resp) => {
  const user = {
    name: "kuldeep singh",
    useId: req.params.userid,
    email: "kdsinghak47@gmail.com",
    occupation: "software engineer",
    skills: ["c++", "React-native", "react", "javaScript"],
  };

  resp.render("profile", { user });
});

app.listen(8080);
