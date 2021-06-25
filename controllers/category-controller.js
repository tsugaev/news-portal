const Category = require("../models/Category");

const getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (e) {
    console.log(e.message);
  }
};

const getCategoryById = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    res.render("category", {
      exactCategory: category,
    });
  } catch (e) {
    console.log(e.message);
  }
};

const postCategory = async (req, res) => {
  try {
    const newCategory = await new Category({
      name: req.body.name,
    });
    newCategory.save();
    res.json("New category added");
  } catch (e) {
    console.log(e.message);
  }
};

const patchCategory = async (req, res) => {
  try {
    await Category.updateOne({ _id: req.params.id }, { $set: { ...req.body } });
    res.json("Category changed");
  } catch (e) {
    console.log(e.message);
  }
};

const deleteCategory = async (req, res) => {
  try {
    await Category.deleteOne({ _id: req.params.id });
    res.json("Category deleted");
  } catch (e) {
    console.log(e.message);
  }
};

module.exports = {
  getCategories,
  getCategoryById,
  postCategory,
  patchCategory,
  deleteCategory,
};
