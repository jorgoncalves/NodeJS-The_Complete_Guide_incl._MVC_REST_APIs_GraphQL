const path = require('path');

const express = require('express');

const rootDir = require('./util/path');

const homeRoute = require('./routes/home');
const usersRoute = require('./routes/users');

const app = express();

app.use(express.static(path.join(rootDir,'public')));

app.use(usersRoute);
app.use(homeRoute);

app.listen(3000);
