const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

// Replace with your MongoDB connection string
const uri = "mongodb://127.0.0.1:27017/Courses";
mongoose.connect(uri);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// Since the data is stored in an array within a single document,
// we will create a schema and model for the document that contains the 'cse' field.
const CourseSchema = new mongoose.Schema({
  cse: [
    {
      course: String,
      courseId: Number,
      cohort: Number,
      college: String,
      semester: Number,
      averageRating: Number,
      studentsVoted: Number,
    },
  ],
});

const CoursesDocument = mongoose.model("Subjects", CourseSchema);

// Routes
app.get("/courses", async (req, res) => {
  try {
    const doc = await CoursesDocument.findOne();
    res.json(doc.cse);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get("/courses/:courseName", async (req, res) => {
  try {
    const doc = await CoursesDocument.findOne();
    const course = doc.cse.find((c) => c.course === req.params.courseName);
    res.json(course);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get("/courses/:courseName/rating", async (req, res) => {
  try {
    const doc = await CoursesDocument.findOne();
    const course = doc.cse.find((c) => c.course === req.params.courseName);
    res.json({ averageRating: course.averageRating });
  } catch (error) {
    res.status(500).send(error);
  }
});

app.post("/courses", async (req, res) => {
  try {
    const doc = await CoursesDocument.findOne();
    doc.cse.push(req.body);
    await doc.save();
    res.status(201).send("Course added successfully");
  } catch (error) {
    res.status(500).send(error);
  }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
