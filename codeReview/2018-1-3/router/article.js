const express = require('express');

let router_article = express.Router();

router_article.get('/', (req, res)=>{
  res.send('文章的根路径');
  res.end();
});

module.exports = router_article;
