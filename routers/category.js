const { Router } = require("express");
const router = Router();
const methods = require("../controllers/index");

router.get("/categories", methods.categoryMethods.getCategories);

router.get("/category/:id", methods.categoryMethods.getCategoryById);

router.post("/category", methods.categoryMethods.postCategory);

router.patch("/category/:id", methods.categoryMethods.patchCategory);

router.delete("/category/:id", methods.categoryMethods.deleteCategory);

module.exports = router;
