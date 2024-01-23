const mongoose = require("mongoose");

const uri = "mongodb://127.0.0.1:27017/lallaland"; // Replace 'myDatabase' with your database name

mongoose
  .connect(uri)
  .then(() => console.log("MongoDB connected…"))
  .catch((err) => console.log(err));

// Define a schema
const Schema = mongoose.Schema;
const MyModelSchema = new Schema({
  // define the schema fields here
});

// Create a model
const MyModel = mongoose.model("MyModel", MyModelSchema);
