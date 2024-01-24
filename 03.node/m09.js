const mongoose = require("mongoose");

const uri = "mongodb://127.0.0.1:27017/NewDB"; // Replace 'NewDB' with your database name

mongoose
  .connect(uri)
  .then(() => console.log("MongoDB connected…"))
  .catch((err) => console.log(err));

// Define a schema
const Schema = mongoose.Schema;
const UserProfileSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+\@.+\..+/, "Please fill a valid email address"],
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  interests: {
    type: [String],
    default: [],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create a model
const UserProfile = mongoose.model("UserProfile", UserProfileSchema);

// Examples of valid documents based on this schema:
const user1 = new UserProfile({
  username: "user1",
  email: "user1@example.com",
  dateOfBirth: new Date(1990, 6, 20),
  interests: ["coding", "hiking"],
});

const user2 = new UserProfile({
  username: "user2",
  email: "user2@example.com",
  dateOfBirth: new Date(1985, 2, 15),
  interests: ["photography", "traveling"],
});

// Add user1 and user2 to the database
const addUsersToDB = async () => {
  try {
    await user1.save();
    console.log("User 1 added successfully!");
    await user2.save();
    console.log("User 2 added successfully!");
  } catch (error) {
    console.error("Error adding users:", error);
  }
};
addUsersToDB();

// Create an invalid user instance
const invalidUser = new UserProfile({
  username: "invalidUser", // Valid
  email: "invalid-email", // Invalid email format
  // Missing dateOfBirth field
});

// Attempt to add invalidUser to the database
const addInvalidUserToDB = async () => {
  try {
    await invalidUser.save();
    console.log("Invalid user added successfully!");
  } catch (error) {
    console.error("Error adding invalid user:", error.message);
  }
};

addInvalidUserToDB();
