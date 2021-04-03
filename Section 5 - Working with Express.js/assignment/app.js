const express = require('express');

const app = express();

// app.use((req, res, next) => {
//   console.log('This is the first miidleware');
//   next();
// });

// app.use((req, res, next) => {
//   console.log('This is the second middleware');
//   res.send('<h1>This is the assignment!</h1>');
// });

app.use('/users', (req, res, next) => {
  console.log('This is the second middleware');
  res.send('<h1>This is the users route!</h1>');
});

app.use('/',(req, res, next) => {
  console.log('This is the first middleware');
  res.send('<h1>This is the Home route!</h1>');
});

app.listen(3000);