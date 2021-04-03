const path = require('path');

//ES6 sintax // import express from 'express'; 
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const pageNotFound = require('./routes/pagenotfound');

//middleware
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(express.static(path.join(__dirname, 'public')));
//podemos usar o objeto adminRoutes como um parametro no middleware e as routes de lá serão validas
app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(pageNotFound);

app.listen(3000);