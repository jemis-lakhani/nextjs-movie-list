const mongoose = require("mongoose");

const { MONGODB_URI } = process.env;

// console.log({ MONGODB_URI });0

export default async function dbConnect() {
  await mongoose.connect(MONGODB_URI);
}
