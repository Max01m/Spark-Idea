const { Schema, model, ObjectId } = require("mongoose");

const User = new Schema({
  userName: { type: String  },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  avatar: { type: String, default: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shalerus.ru%2Fuser-avatar-icon-sign-profile-symbol-royalty-free-svg-ee-22659411&psig=AOvVaw12TLq9pieV5aMLT_oMCE-z&ust=1718702009263000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPCbxImm4oYDFQAAAAAdAAAAABAJ" },
  files: [{ type: ObjectId, ref: "File" }],
});

module.exports = model("User", User);
