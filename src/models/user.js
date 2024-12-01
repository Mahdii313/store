import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  emailPhone: String,
  password: String,
  permission: String,
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
