// =====================
// Imports
// =====================

import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/db.js";

import authRoutes from "./routes/authRoutes.js";
import videoRoutes from "./routes/videoRoutes.js";
import commentRoutes from "./routes/commentRoutes.js";
import channelRoutes from "./routes/channelRoutes.js";

// =====================
// Environment
// =====================

dotenv.config();

// =====================
// Database Connection
// =====================

connectDB();

// =====================
// Express App
// =====================

const app = express();

// =====================
// Middlewares
// =====================

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({
    extended: true
}));

// =====================
// Routes
// =====================

app.use("/api/auth", authRoutes);

app.use("/api/videos", videoRoutes);

app.use("/api/comments", commentRoutes);

app.use("/api/channels", channelRoutes);

// =====================
// Health Check
// =====================

app.get("/", (req, res) => {

    res.json({

        success: true,

        message: "YouTube Clone Backend Running"

    });

});

// =====================
// Server
// =====================

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {

    console.log(

        `Server running on http://localhost:${PORT}`

    );

});