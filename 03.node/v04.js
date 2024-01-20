// const express = require("express");
import express from "express";
const app = express();
const port = 8000;

// Middleware to parse JSON body in requests
app.use(express.json());

// In-memory "database"
let courses = {
  cse: [
    {
      course: "frontend",
      courseId: 1,
      cohort: 10,
      college: "LPU",
      semester: 2,
      averageRating: 0,
      studentsVoted: 0,
    },
    {
      course: "backend",
      courseId: 2,
      cohort: 11,
      college: "GTU",
      semester: 3,
      averageRating: 9.25,
      studentsVoted: 12,
    },
    {
      course: "design",
      courseId: 3,
      cohort: 10,
      college: "LPU",
      semester: 2,
      averageRating: 0,
      studentsVoted: 0,
    },
    {
      course: "dsa",
      courseId: 4,
      cohort: 10,
      college: "VIT",
      semester: 2,
      averageRating: 4,
      studentsVoted: 3,
    },
  ],
};

// GET - List all courses
app.get("/courses", (req, res) => {
  res.json(courses.cse);
});

// GET - Details of a specific course by name
app.get("/courses/:courseName", (req, res) => {
  const course = courses.cse.find((c) => c.course === req.params.courseName);
  if (!course) {
    res.status(404).send("Course not found");
  } else {
    res.json(course);
  }
});

// GET - Average rating of a specific course
app.get("/courses/:courseName/rating", (req, res) => {
  const course = courses.cse.find((c) => c.course === req.params.courseName);
  if (!course) {
    res.status(404).send("Course not found");
  } else {
    res.json({ averageRating: course.averageRating });
  }
});

// POST - Create a new course
app.post("/courses", (req, res) => {
  courses.cse.push(req.body);
  res.send("Course added");
});

// POST - Add a rating to a course
app.post("/courses/:courseName/rating", (req, res) => {
  const course = courses.cse.find((c) => c.course === req.params.courseName);
  if (!course) {
    res.status(404).send("Course not found");
  } else {
    const rating = req.body.rating;
    course.averageRating =
      (course.averageRating * course.studentsVoted + rating) /
      (course.studentsVoted + 1);
    course.studentsVoted++;
    res.send("Rating updated");
  }
});

// PUT - Modify information of a course
app.put("/courses/:courseName", (req, res) => {
  const index = courses.cse.findIndex(
    (c) => c.course === req.params.courseName
  );
  if (index === -1) {
    res.status(404).send("Course not found");
  } else {
    courses.cse[index] = { ...courses.cse[index], ...req.body };
    res.send("Course updated");
  }
});

app.get("/*", (req, res) => {
  res.send("You are on worng route. Here's the list of possible routes");
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
