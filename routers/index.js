const { Router } = require("express");
const router = Router();

const categoryRouter = require("./category");
const newsTitleRouter = require("./news-title");
const commentRouter = require("./comment");

router.use(categoryRouter);
router.use(newsTitleRouter);
router.use(commentRouter);

module.exports = router;
