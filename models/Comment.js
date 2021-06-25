const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  comment: {
    type: String,
    required: true,
  },
  titleId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "News-title",
  },
  user: {
    type: String,
  },
});

module.exports = mongoose.model("Comment", commentSchema);
