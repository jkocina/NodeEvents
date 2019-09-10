const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  console.log('Request for home recieved');
  res.render('index', {title:'index'});
});

router.get('/about', (req, res) => {
  console.log('Request for about page recieved');
  res.render('about', {title:'about'});
});

router.get('/events', (req, res) => {
  console.log('Request for contact page recieved');

  res.render('events', {title:'events'});
});

module.exports = router;
