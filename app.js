// Load env vars
require('dotenv').config()
// require stMonitor agent
// const { stHttpLoggerMiddleware } = require('sematext-agent-express')

// var Logsene = require('logsene-js')
var Logsene = require('../sematext/logsene-js')
var logger = new Logsene('1c1bcac2-1ec6-491d-846b-465ff8f23074', 'logs', 'https://logs-token-receiver.apps.test.sematext.coms')

const express = require('express')
const app = express()

// app.use(stHttpLoggerMiddleware)

app.get('/', (req, res, next) => {
  console.log('Hello World!')

  logger.log('info', 'text message', { tags: ['a', 'b'], customField: 'custom-field' })

  res.status(200).send('Hello World!')
})

module.exports = app
