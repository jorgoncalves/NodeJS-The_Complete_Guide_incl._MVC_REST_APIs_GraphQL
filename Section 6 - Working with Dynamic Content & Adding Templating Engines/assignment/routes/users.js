const express = require('express');

const router = express.Router();

const usersData = require('./index');

router.get('/users', (req, res) => {
  const usernames = usersData.names;
  res.render('users', {
    users: usernames
  });
});

module.exports = router;