// Load env vars
require('dotenv').config()
// require stMonitor agent
const { stHttpLoggerMiddleware } = require('sematext-agent-express')

const express = require('express')
const app = express()

app.use(stHttpLoggerMiddleware)

app.get('/', (req, res, next) => {
  console.log('Hello World!')
  res.status(200).send('Hello World!')
})

module.exports = app
