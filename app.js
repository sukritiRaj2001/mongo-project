const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./server/config/db");
const userRoutes = require("./server/routes/user");

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(bodyParser.json());
app.use(express.static("public"));

// Routes
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
