/* eslint-disable no-unused-vars */

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === '/'){
    res.write('<html><header><title>Home Route</title></header><body><h1>You are on the Home Route!</h1>');
    res.write('<form action="/create-user" method="POST"><input name="userName"><button type="submit">Send</button></form>');
    res.write('</body></html>');
    res.end();
  }
  if (url === '/users'){
    res.write('<html><header><title>Users Route</title></header><body><h1>You are on the Users Route!</h1></body></html>');
    res.write('<ul><li>User 1</li><li>User 2</li></ul>');
    res.end();
  }
  if (url === '/create-user' && method === 'POST'){
    const body = [];
    req.on('data', (chunck) => {
      // console.log(chunck);
      body.push(chunck);
    });
    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split('=')[1];
      console.log(message);
      res.statusCode = 302; // importate utilizar o codigo de redirecionamento 
      res.setHeader('Location', '/');
      return res.end();
    });
  }
};

module.exports = {
  handler : requestHandler
};