const mongoose = require("mongoose");
require("dotenv/config");

async function connect() {
  try {
    await mongoose.connect("mongodb+srv://duydvn21406:yendb123@yendb.qwzcuw2.mongodb.net/?retryWrites=true&w=majority");
    console.log("Successfully!");
  } catch (error) {
    console.log("error", error.message);
  }
}

module.exports = { connect };
