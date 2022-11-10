const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    First_Name: { type: String, required: true, unique: true },
    Last_Name:String,
    Email: { type: String, required: true, unique: true },
    Phone:String
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
