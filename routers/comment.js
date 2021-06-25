const { Router } = require("express");
const router = Router();
const methods = require("../controllers/index");

router.get("news/:id/comments/:id", methods.commentMethods.getCommentById);

router.get("/news/:id/comments", methods.commentMethods.getNewsPostComment);

router.post("/title/:id/comment", methods.commentMethods.postComment);

module.exports = router;
