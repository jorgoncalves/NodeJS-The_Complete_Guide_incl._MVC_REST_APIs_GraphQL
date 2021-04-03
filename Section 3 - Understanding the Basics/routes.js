/* eslint-disable no-unused-vars */
const fs = require('fs');

const requestHandler = ( req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === '/'){
    res.write('<html>');
    res.write('<head><title>Enter Message</title></head>');
    res.write('<body><h1><form action="/message" method ="POST"><input type="text" name="message"><button type="submit">Send</button></form></h1></body>');
    res.write('</html>');
    return res.end(); //necessario por causa da função anonima, senão irá correr o resto do codigo.
  }
  if (url ==='/message' &&  method === 'POST'){
    const body = []; //apesar de ser cosnt, podemos na mesma fazer push, não podemos é alterar os valores
    req.on('data', (chunck) => {
      console.log(chunck);
      body.push(chunck);
    });//eventListener
    return req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split('=')[1];
      fs.writeFile('message.txt', message,(err) => {
        res.statusCode = 302;//302 representa o redirecionamento. StatusCode, exemplo 404
        res.setHeader('Location', '/');
        return res.end();
      });
    });
  }
  console.log(req.url, req.method, req.headers);
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My Firs Page</title></head>');
  res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
  res.write('</html>');
  res.end();
};

// module.exports = requestHandler;

module.exports = {
  handler:requestHandler,
  someText: 'Hello'
};

// module.exports.handler = requestHandler;
// module.exports.someText = 'Some Text';

// exports.handler = requestHandler;
// exports.someText = 'Some hard coded text';