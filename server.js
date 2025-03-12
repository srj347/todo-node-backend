require("dotenv").config();
const express = require("express");
const connectDB = require("./config/database");
const app = express();
const todoRoute = require("./routes/todo");
const authRoute = require("./routes/auth");

connectDB();

// initialize middleware
app.use(express.json({ extended: false }));
app.get("/", (req, res) => res.send("Server up and running"));

// routes
app.use("/api/todo", todoRoute);
app.use("/api/auth", authRoute);

// setting up port
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
});