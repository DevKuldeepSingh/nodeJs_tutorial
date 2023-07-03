const uploadedFileSchema = require("./modelSchema");
const App = require("./server");
const multer = require("multer");
const mongoose = require("mongoose");

const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, callback) => {
      console.log(file, req);
      callback(null, "studentProfile");
    },
    filename: (req, file, callback) => {
      console.log(req);
      callback(null, file.originalname);
    },
  }),
}).single("profilePic");

App.post("/uploadStudentProfile", upload, (req, resp) => {
  if (!req.file) {
    resp.status(404).send("file not upload");
  }
  const { path } = req.file;
  const { name } = req.body;
  const Student = mongoose.model("studentProfiles", uploadedFileSchema);
  // `${req.protocol}://${req.get("host")}/${path}`,
  const uploadedFile = new Student({
    name,
    profilePic: path,
  });
  uploadedFile
    .save()
    .then(() => {
      resp.status(200).json({ message: "File uploaded successfully" });
    })
    .catch((error) => {
      resp.status(500).json({ message: "Failed to upload file" });
    });
});

App.get("/getStudentProfile", async (req, resp) => {
  const Student = mongoose.model("studentProfiles", uploadedFileSchema);
  const data = await Student.find({});
  console.log(data);

  resp.send(data);
});
