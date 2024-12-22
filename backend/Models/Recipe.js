const mongoose = require("mongoose");

const RecipeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  ingredients: { type: [String], required: true },
  images: { type: [String], default: [] },
  likes: { type: Number, default: 0 },
  likedBy: { type: [String], default: [] }, // New field
});

module.exports = mongoose.model("Recipe", RecipeSchema);
