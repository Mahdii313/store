import { DATABASE_KEY } from "@/constants";
import mongoose from "mongoose";

const connectToDB = async () => {
  await mongoose
    .connect(DATABASE_KEY)
    .then(() => console.log("Connected to database"))
    .catch((error) => console.log(error));
};

export default connectToDB;
