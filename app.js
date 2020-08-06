// Load env vars
require('dotenv').config()
// require stMonitor agent
// const { stHttpLoggerMiddleware } = require('sematext-agent-express')

const Logsene = require('../sematext/winston-logsene/lib')
const { createLogger, format, config } = require('winston')

var logger = createLogger({
  levels: config.npm.levels,
  transports: [new Logsene({
    level: 'debug',
    format: format.splat(),
    token: 'token',
    url: 'https://logs-token-receiver.apps.test.sematext.coms'
  })]
})

const express = require('express')
const app = express()

// app.use(stHttpLoggerMiddleware)

app.get('/', (req, res, next) => {
  console.log('Hello World!')

  logger.info('debug', { message: 'Info Message' })

  res.status(200).send('Hello World!')
})

module.exports = app
