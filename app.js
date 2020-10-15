// Load env vars
require('dotenv').config()
// require stMonitor agent
// const { stHttpLoggerMiddleware } = require('sematext-agent-express')

const Logsene = require('winston-logsene')
const { createLogger, format, transports, config } = require('winston')

const logger = createLogger({
  levels: config.npm.levels,
  format: format.simple(),
  transports: [
    new transports.Console(), // You can remove this line if you do not want logging in the console. 
    new Logsene({
      token: 'c0f7154e-7c08-41ac-9fc2-8dfe2aadcd6b',
      level: 'debug',
      type: 'app_logs',
      url: 'https://logs-token-receiver.apps.test.sematext.com'
    }
  )]
})

const express = require('express')
const app = express()

// app.use(stHttpLoggerMiddleware)

app.get('/', (req, res, next) => {
  logger.info('Info Message')
  res.status(200).send('Hello World!')
})

module.exports = app
