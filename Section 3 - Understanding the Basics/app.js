/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
const http = require('http');

const routes = require('./routes');

const server = http.createServer(routes.handler);
console.log(routes.someText);


server.listen(3000);