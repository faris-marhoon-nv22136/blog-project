import express from "express";
import dotenv from "dotenv";
import connectDB from "/workspaces/blog-project/backend-blog-app/config/db.js";

dotenv.config();
connectDB();
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})