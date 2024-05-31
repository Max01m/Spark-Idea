const { Schema, model, ObjectId } = require("mongoose");

const User = new Schema({
  userName: { type: String  },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  avatar: { type: String },
  files: [{ type: ObjectId, ref: "File" }],
});

module.exports = model("User", User);
