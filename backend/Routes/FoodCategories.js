const express = require('express');
const router = express.Router();

// food-categories
router.post("/food-categories", (req, res) => {
  try {
    res.send(global.food_categories);
  } catch (error) {
    console.log("Error:", error);
    res.send('Server Error');
  }
})

module.exports = router;