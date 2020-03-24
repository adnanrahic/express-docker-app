const express = require('express')
const app = express()

setInterval(() => {
  console.log('Tick Tock')
}, 3000)

app.get('/', async (req, res, next) => {
  res.status(200).send('Hello World!')
  console.log('Hello World!')
})
app.listen(4000, () =>
  console.log('Server is running on port 4000'))
