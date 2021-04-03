/* eslint-disable no-unused-vars */
const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');
const sendgridTransport = require('nodemailer-sendgrid-transport');

const User = require('../models/user');

const transport = nodemailer.createTransport(sendgridTransport({
  auth: {
    api_key: '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'
  }
}));

exports.getLogin = (req, res, next) => {
  let message = req.flash('error');
  if (message.length > 0) {
    message = message[0];
  } else {
    message = null;
  }
  res.render('auth/login', {
    path: '/login',
    pageTitle: 'Login',
    errorMessage: message
  });
};

exports.getSignup = (req, res, next) => {
  let message = req.flash('error');
  if (message.length > 0) {
    message = message[0];
  } else {
    message = null;
  }
  res.render('auth/signup', {
    path: '/signup',
    pageTitle: 'Signup',
    errorMessage: message
  });
};

exports.postLogin = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  User
    .findOne({
      email: email
    })
    .then(user => {
      if (!user) {
        req.flash('error', 'Invalid login.');
        return res.redirect('/login');
      }
      bcrypt
        .compare(password, user.password)
        //compare devolve um boolean 
        .then(doMatch => {
          if (doMatch) {
            req.session.isLoggedIn = true;
            req.session.user = user;
            return req.session.save(err => {
              console.log(err);
              res.redirect('/');
            });
          }
          req.flash('error', 'Invalid login.');
          res.redirect('/login');
        })
        .catch(err => {
          console.log(err);
          res.redirect('/login');
        });
    })
    .catch(err => console.log(err));
};

exports.postSignup = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  const confirmPassword = req.body.confirmPassword;

  User
    .findOne({
      email: email
    })
    .then(userDoc => {
      if (userDoc) {
        req.flash('error', 'E-Mail exists already, please pick a different one.');
        return res.redirect('/signup');
      }
      return bcrypt.hash(password, 12)
        //como primeiro valor a string que queremos fazer hash
        //segundo o valor do salt, quantas rounds de hash, quanto maior mais seguro mas mais demorado. 12 é atualmente aceite como seguro
        //isto é uma função assincrona e assim devolve uma promise
        .then(hashedPassword => {
          const user = new User({
            email: email,
            password: hashedPassword,
            cart: {
              items: []
            }
          });
          return user.save();
        })
        .then(result => {
          res.redirect('/login');
          return transport
            .sendMail({
              to: email,
              from: 'shop@nodecomplete.com',
              subject: 'Signup Succeeded!',
              html: '<h1> You successfully signed up! </h1>'
            })
        })
        .catch(err => {
          console.log(err);;
        });
    })
    .catch(err => {
      console.log(err);
    });
};



exports.postLogout = (req, res, next) => {
  req.session.destroy(err => {
    console.log(err);
    res.redirect('/');
  });
};