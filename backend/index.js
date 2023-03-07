const express = require('express')
const app = express()
const port = 5000

const mongoDB = require('./db')

mongoDB().then(() => {
  console.log('handle success here');
}).catch((e) => {
  console.log('handle error here: ', e.message)
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})