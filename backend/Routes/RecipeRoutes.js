const express = require("express");
const router = express.Router();
const Upload = require("../Middleware/Upload");
const {
  addRecipe,
  getRecipe,
  likeRecipe,
} = require("../Controller/RecipeController");

router.post("/add", Upload.array("images", 3), addRecipe);
router.get("/", getRecipe);
router.post("/:id/like", likeRecipe);

module.exports = router;
