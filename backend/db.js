const mongoose = require('mongoose');

const appName = 'quickfood'
const passcode = 'Abc123$$$'
const dbName = 'quickfoodmern'


// create var to add/edit/update database URL
// const mongoURL = `mongodb+srv://${appName}:${passcode}@cluster0.fekhvtj.mongodb.net/${dbName}?retryWrites=true&w=majority`
const mongoURL = `mongodb://${appName}:${passcode}@ac-lrltqiw-shard-00-00.fekhvtj.mongodb.net:27017,ac-lrltqiw-shard-00-01.fekhvtj.mongodb.net:27017,ac-lrltqiw-shard-00-02.fekhvtj.mongodb.net:27017/${dbName}?ssl=true&replicaSet=atlas-ugxgk6-shard-0&authSource=admin&retryWrites=true&w=majority`

// create function to export and connected to express.js
const dbConnect = async () => {
  try {

    await mongoose.connect(mongoURL).then(async () => {
      console.log(`You've successfully connected your database.`);

      // Find all data from food items collection
      const fetchedFoodItemData = await mongoose.connection.db.collection("food_items");
      fetchedFoodItemData.find({}).toArray().then((data) => {
        global.food_items = data;
      }).catch((e) => {
        console.log("Error:", e);
      })

      // Find all data from food categories collection
      const fetchedFoodCategories = await mongoose.connection.db.collection("food_categories");
      fetchedFoodCategories.find({}).toArray().then((data) => {
        global.food_categories = data;
      }).catch((e) => {
        console.log("Error:", e);
      })

    }).catch((e) => {
      console.log('Error establishing a database connection: ', e)
    });
  }
  catch (err) {
    console.log('Error at dbConnect ::', err)
  }
}

module.exports = dbConnect;