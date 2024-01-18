// const express = require("express");
import express from "express";
const app = express();
const port = 3000;

// Start the server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
