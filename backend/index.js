const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
require("dotenv").config();
const cors = require("cors");
const AuthRouter = require("./Routes/AuthRouter");

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI =
  "mongodb+srv://scienceislife2004:KarikKartik@cluster0.jxn6e.mongodb.net/auth-db?retryWrites=true&w=majority&appName=Cluster0";

// Connect to MongoDB
mongoose
  .connect(MONGODB_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to Kartik Backend!");
});

app.use(bodyparser.json());
app.use(cors());
app.use("/auth", AuthRouter);

// Start server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
