const { Router } = require("express");
const router = Router();
const methods = require("../controllers/index");

router.get("/news", methods.newsTitleMethods.getAllNews);

router.get("/news/:id", methods.newsTitleMethods.getNewsById);

router.get("/category/:id/news", methods.newsTitleMethods.getCategoryNews);

router.post("/category/:id/title", methods.newsTitleMethods.postNewsTitle);

module.exports = router;
