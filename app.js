// Load env vars
require('dotenv').config()
// require stMonitor agent
const { stMonitor } = require('sematext-agent-express')
// Start monitoring metrics
stMonitor.start()

const express = require('express')
const app = express()

setInterval(() => console.log('Tick Tock'), 3000)

app.get('/', (req, res, next) => {
  console.log('Hello World!')
  res.status(200).send('Hello World!')
})

module.exports = app
