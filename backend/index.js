const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();
const cors = require("cors");
const AuthRouter = require("./Routes/AuthRouter");
const RecipeRoutes = require("./Routes/RecipeRoutes");

const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI =
  "mongodb+srv://scienceislife2004:KarikKartik@cluster0.jxn6e.mongodb.net/auth-db?retryWrites=true&w=majority&appName=Cluster0";

// Connect to MongoDB
mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Middleware
app.use(cors({ origin: "http://localhost:3000" })); // Allows requests from frontend
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to Kartik Backend!");
});
app.use("/auth", AuthRouter);
app.use("/api/Recipes", RecipeRoutes);
app.use("/Upload", express.static(path.join(__dirname, "Upload")));

// Start server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
