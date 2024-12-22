const Recipe = require("../Models/Recipe");

exports.addRecipe = async (req, res) => {
  try {
    const { title, description, ingredients } = req.body;
    const parsedIngredients = JSON.parse(ingredients);

    const images = req.files.map((file) => `/Uploads/${file.filename}`);

    const newRecipe = new Recipe({
      title,
      description,
      ingredients: parsedIngredients,
      images,
    });
    await newRecipe.save();

    res
      .status(201)
      .json({ message: "Recipe added successfully", recipe: newRecipe });
  } catch (error) {
    console.error("Error adding recipe:", error.message);
    res.status(500).json({ message: "Failed to add recipe" });
  }
};

exports.getRecipe = async (req, res) => {
  try {
    const recipes = await Recipe.find().sort({ createdAt: -1 });
    res.status(200).json(recipes);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Failed to Fetch Recipes" });
  }
};

exports.likeRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) {
      return res.status(404).json({ message: "Recipe not found" });
    }
    recipe.likes += 1;
    await recipe.save();
    res.status(200).json(recipe);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Failed to like recipe" });
  }
};
