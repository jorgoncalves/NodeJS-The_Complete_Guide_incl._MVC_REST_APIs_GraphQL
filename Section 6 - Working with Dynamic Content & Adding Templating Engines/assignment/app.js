const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');

const indexRoutes = require('./routes/index');
const usersRoutes = require('./routes/users');

app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(indexRoutes.routes);
app.use(usersRoutes);

app.listen(3000);