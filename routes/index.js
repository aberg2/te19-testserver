const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/views/', async  function(req, res, next) {
  let  data = {
    message: 'Hello world!',
    layout:  'layout.njk',
    title: 'Det funka! WAOW'
  }

  res.render('index.njk', data)
})

module.exports = router;
