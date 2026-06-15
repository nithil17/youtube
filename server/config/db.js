// =====================
// Imports
// =====================

import mongoose from "mongoose";

// =====================
// Database Connection
// =====================

const connectDB = async () => {

  try {

    await mongoose.connect(

      process.env.MONGO_URL

    );

    console.log("✅ MongoDB Connected");

  } catch (error) {

    console.error("❌ MongoDB Connection Failed");

    console.error(error.message);

    process.exit(1);

  }

};

// =====================
// Export
// =====================

export default connectDB;