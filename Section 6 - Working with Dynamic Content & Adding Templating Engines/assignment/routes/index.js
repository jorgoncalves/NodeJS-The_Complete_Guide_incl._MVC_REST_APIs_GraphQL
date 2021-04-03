const express = require('express');


const router = express.Router();

const usernames = [];

router.get('/', (req, res) => {
  res.render('index');
});

router.post('/', (req, res) => {
  usernames.push({
    name: req.body.nome
  });
  res.redirect('/users');
});

module.exports.routes = router;
module.exports.names = usernames;