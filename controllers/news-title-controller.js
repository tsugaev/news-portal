const NewsTitle = require("../models/NewsTitle");
const Comment = require("../models/Comment");

const getAllNews = async (req, res) => {
  try {
    const news = await NewsTitle.find().lean();
    res.render("home", {
      news: news,
    });
  } catch (e) {
    console.log(e.message);
  }
};

const getNewsById = async (req, res) => {
  try {
    const newsId = await NewsTitle.findById(req.params.id).lean();
    const comments = await Comment.find({
      titleId: req.params.id,
    }).lean();
    res.render("exact-news", {
      news: newsId,
      objComments: comments,
    });
    console.log(comments);
  } catch (e) {
    console.log(e.message);
  }
};

const getCategoryNews = async (req, res) => {
  try {
    const newsList = await NewsTitle.find({
      categoryId: req.params.id,
    }).lean();
    res.render("news", {
      news: newsList,
    });
  } catch (e) {
    console.log(e.message);
  }
};

const postNewsTitle = async (req, res) => {
  try {
    const newsTitle = await new NewsTitle({
      title: req.body.title,
      subtitle: req.body.subtitle,
      imgUrl: req.body.imgUrl,
      categoryId: req.body.categoryId,
    });
    newsTitle.save();
    res.json("News-title added");
  } catch (e) {
    console.log(e.message);
  }
};

module.exports = {
  postNewsTitle,
  getAllNews,
  getNewsById,
  getCategoryNews,
};
