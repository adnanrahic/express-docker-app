// Load env vars
require('dotenv').config()
// require stMonitor agent
// const { stMonitor, stLogger } = require('sematext-agent-express')
// Start monitoring metrics
// stMonitor.start()

const express = require('express')
const app = express()

const err = new Error('this broke')

const errStack = `TypeError: Cannot create property 'Symbol(level)' on string 'Tick Tock'
  at DerivedLogger.log (/home/raha/code/express-docker-app/node_modules/winston/lib/winston/logger.js:208:20)
  at Timeout.setInterval [as _onTimeout] (/home/raha/code/express-docker-app/app.js:11:28)
  at ontimeout (timers.js:436:11)
  at tryOnTimeout (timers.js:300:5)
  at listOnTimeout (timers.js:263:5)
  at Timer.processTimers (timers.js:223:10)`

setInterval(() => {
  console.info(`
    Tick Tock
    LOGS_ENABLED_DEFAULT=true
    LOGS_ENABLED=true/false
  `)
}, 3000)

app.get('/', (req, res, next) => {
  // stLogger.info('Hello World.')
  // stLogger.debug('Hello debug.')
  // stLogger.warn('Some warning.')
  // stLogger.error(err)
  // throw err
  console.log('inside /')
  res.status(200).send('Hello World.')
})

app.get('/err', (req, res, next) => {
  // stLogger.info('Hello World.')
  // stLogger.debug('Hello debug.')
  // stLogger.warn('Some warning.')
  // stLogger.error(err)
  // console.dir(err)
  throw err
  // res.status(200).send('Hello World.')
})

function errorHandler (err, req, res, next) {
  console.error(err)
  console.log('inside errorHandler')
  res.status(err.status || 500).send(err.message)
}

app.use(errorHandler)

module.exports = app
