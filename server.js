const NewsAPI = require('newsapi');
require('dotenv').config();
const newsapi = new NewsAPI(process.env.API_KEY);
// To query /v2/top-headlines
// All options passed to topHeadlines are optional, but you need to include at least one of them
const express = require('express');
const app = express();

app.get('/api/topHeadlines', function(req, res) {
  newsapi.v2
    .topHeadlines({
      category: 'business',
      language: 'en',
      country: 'us',
    })
    .then(response => {
      console.log(response);
      res.json(response);
      /*
      {
        status: "ok",
        articles: [...]
      }
    */
    });
});

app.listen(process.env.PORT || 3000);
