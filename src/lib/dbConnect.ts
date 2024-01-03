const mongoose = require("mongoose");

const { MONGODB_URI } = process.env;

export default async function dbConnect() {
  const db = await mongoose.connect(MONGODB_URI);
  console.log(db);
}
