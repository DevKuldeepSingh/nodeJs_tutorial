const fs = require("fs");

const input = process.argv;

// if (input[2] === "add") {
//   fs.writeFileSync(input[3], input[4]);
// } else if (input[2] === "remove") {
//   fs.unlinkSync(input[3]);
// } else {
//   console.log("invalid input");
// }

const path = require("path");
const dirpath = path.join(__dirname, "files");

// for (let i = 0; i < 5; i++) {
//   fs.writeFileSync(`${dirpath}/hello${i}.txt`, "hello some more files");
// }

// fs.readdir(dirpath, (err, files) => {
//   files.forEach((item) => {
//     console.log(item);
//   });
// });

const filePath = `${dirpath}/hello0.txt`;

fs.readFile(filePath, "utf-8", (err, item) => {
  console.log("content in the file is ", item);
});

fs.appendFile(filePath, "\nthe append data", (err) => {
  if (!err) console.log("file is updated");
});

fs.rename(filePath, "filenamechange.txt", () => {});
