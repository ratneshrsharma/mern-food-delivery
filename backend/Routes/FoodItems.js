const express = require('express');
const router = express.Router();

// food-items
router.post("/food-items", (req, res) => {
  try {
    res.send(global.food_items);
  } catch (error) {
    console.log("Error:", error);
    res.send('Server Error');
  }
})

module.exports = router;