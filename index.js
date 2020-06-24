const express = require("express");
const Twitter = require("twit");
const logger = require("morgan");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const client = new Twitter({
  consumer_key: "koAwwsDjxtjk4HqCOS7QUAATD",
  consumer_secret: "PnmETZRHrp9LdeMlkhmLG1nvb49L0I2uoNojpDJwcEgroOKwKX",
  access_token: "4614481819-UgQnzjS33sQTuIa7Eg7oPuJKKrKCTWutp0LrCPv",
  access_token_secret: "4sngQDHVOT8S80vksLR6F5Wda1K0hRaTt91al6vRkfDoq",
});

app.get("/tweets", async (req, res) => {
  try {
    const params = req.query;
    const tweets = await client.get(`search/tweets`, params);
    res.json({
      success: true,
      data: tweets,
      statusCode: "TWEETS_FETCHED_SUCCESSFULL",
    });
  } catch (error) {
    res.json({
      success: false,
      message: error,
      statusCode: "TWEETS_FETCHED_FAILED",
    });
  }
});
//serve static assets if in production
if (process.env.NODE_ENV === "production") {
  //Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(5000, () => console.log("App running at localhost:5000 🚀"));
