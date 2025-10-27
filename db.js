const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://admin:<db_password>@cluster0.zq1hgij.mongodb.net/?appName=Cluster0");
    console.log("MongoDB conectado");
  } catch (err) {
    console.error("Error conectando a MongoDB:", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;