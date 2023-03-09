const mongoose = require('mongoose');

const appName = 'quickfood'
const passcode = 'Abc123$$$'

// create var to add/edit/update database URL
const mongoURL = `mongodb+srv://${appName}:${passcode}@cluster0.fekhvtj.mongodb.net/quickfoodmern?retryWrites=true&w=majority`

// create function to export and connected to express.js
const dbConnect = async () => {
  try {

    await mongoose.connect(mongoURL).then(async () => {
      console.log(`You've successfully connected your database.`);

      // Find all data from food item collection
      const fetchedFoodItemData = await mongoose.connection.db.collection("food_items");
      fetchedFoodItemData.find({}).toArray().then((data) => {
        // console.log("Data:", data);
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

// const mongoDB = async function () {
//   return mongoose.connect(mongoURI, { useNewUrlParser: true }).then(async () => {
//     console.log(`You've successfully connected your database.`);
//     const fetch_data = await mongoose.connection.db.collections("food_items");
//     console.log("check:", fetch_data);
//     // fetch_data.find({}).toArray(function(err, data){
//     //   if(err){
//     //     console.log("err: ",err);
//     //   } else{
//     //     console.log(data);
//     //   }
//     // })
//   }).catch((e) => {
//     console.log('Error establishing a database connection: ', e.message)
//   });
// };

module.exports = dbConnect;