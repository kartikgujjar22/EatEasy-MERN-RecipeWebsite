const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String, // Changed "String" to String
    required: true,
  },
  email: {
    type: String, // Changed "String" to String
    required: true,
  },
  password: {
    type: String, // Changed "String" to String
    required: true,
  },
});

const UserModel = mongoose.model("users", UserSchema);
module.exports = UserModel;
