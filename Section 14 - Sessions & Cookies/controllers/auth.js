const User = require('../models/user');

exports.getLogin = (req, res, next) => {
  // const isLoggedIn = req
  //   .get('Cookie')
  //   .split(';')[0]
  //   .trim()
  //   .split('=')[1];
  res.render('auth/login', {
    path: '/login',
    pageTitle: 'Login',
    isAuthenticated: false
  });
};

exports.postLogin = (req, res, next) => {
  User
    .findById('5d382f8ceeb68051ace066ff')
    .then(user => {
      req.session.isLoggedIn = true;
      req.session.user = user;
      req.session.save(err => { //pode ser usado para combater o delay de comunicar com a db
        console.log(err);
        res.redirect('/');
      });
    });
};

exports.postLogout = (req, res, next) => {
  req.session.destroy(err => { //metodo disponibilizado pelo session package
    console.log(err);
    res.redirect('/');
  });
};