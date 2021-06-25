const Comment = require("../models/Comment");

const getAllComments = async (req, res) => {
  try {
    const comments = await Comment.find();
    res.json(comments);
  } catch (e) {
    console.log(e.message);
  }
};

const getNewsPostComment = async (req, res) => {
  try {
    const commentList = await Comment.find({
      titleId: req.params.id,
    });
    res.json(commentList);
  } catch (e) {
    console.log(e.message);
  }
};

const getCommentById = async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id);
    res.json(comment);
  } catch (e) {
    console.log(e.message);
  }
};

const postComment = async (req, res) => {
  try {
    console.log(req.body.user);
    const newComment = await new Comment({
      comment: req.body.comment,
      user: req.body.user,
      titleId: req.params.id,
    });
    newComment.save();
    res.redirect("/news/" + req.params.id);
  } catch (e) {
    console.log(e.message);
  }
};

module.exports = {
  postComment,
  getAllComments,
  getCommentById,
  getNewsPostComment,
};
