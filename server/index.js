const express = require("express");
const cors = require("cors");

const app = express();

const videoRoutes = require("./routes/videoRoutes")



app.use(cors());

app.use(express.json())

app.use("/api/videos", videoRoutes);

const PORT = 5000;

app.get("/", (req, res) =>{
    res.send("Server Running");
})

app.listen(5000,()=>{
    console.log(`Server Started on ${PORT}`);
})