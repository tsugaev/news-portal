const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const hbs = require("express-handlebars");
const indexRouter = require("./routers/index");
const path = require("path");

const app = express();

mongoose
  .connect(
    "mongodb+srv://tepsurkaev:SgTrNSS_2003@cluster0.neogw.mongodb.net/news-portal",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to mongo database");
  });

app.set("view engine", "hbs");
app.engine("hbs", hbs({ extname: ".hbs" }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(indexRouter);
app.use(express.static(path.resolve(__dirname, "public")));

app.listen(3000, () => {
  console.log("Connecting to server...");
});
