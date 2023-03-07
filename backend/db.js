const mongoose = require('mongoose');

// create var to add/edit/update database URL
const mongoURI = 'mongodb://quickfood:Abc123$$$@ac-lrltqiw-shard-00-00.fekhvtj.mongodb.net:27017,ac-lrltqiw-shard-00-01.fekhvtj.mongodb.net:27017,ac-lrltqiw-shard-00-02.fekhvtj.mongodb.net:27017/?ssl=true&replicaSet=atlas-ugxgk6-shard-0&authSource=admin&retryWrites=true&w=majority'

// create function to export and connected to express.js


const mongoDB = async function () {
  const uri = mongoURI; // Will return DB URI 
  console.log(`Connecting to DB - uri`);
  // console.log(`Connecting to DB - uri: ${uri}`);
  return mongoose.connect(uri, {useNewUrlParser: true});
};


module.exports = mongoDB;