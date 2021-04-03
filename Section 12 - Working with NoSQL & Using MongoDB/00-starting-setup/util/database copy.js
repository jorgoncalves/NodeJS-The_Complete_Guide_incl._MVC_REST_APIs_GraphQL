const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;
// _significa que apenas vai ser usado internalmente neste ficheiro 

const mongoConnect = (callback) => {
  MongoClient
    .connect('mongodb+srv://jorge:mongodb@cluster0-8c4e8.mongodb.net/shop?retryWrites=true&w=majority', {
      useNewUrlParser: true
    })
    .then(client => {
      console.log('Connected');
      _db = client.db();
      callback();
    })
    .catch(err => {
      console.log(err);
      throw err;
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw 'No Database Found!';
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;