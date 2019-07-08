const express = require('express')
const app = express()
const morgan = require('morgan')
const logger = require('./logger')
app.use(morgan('tiny', { stream: logger.stream }))

app.get('/api', (req, res, next) => {
  logger.info('Api Works.')
  res.status(200).send('Api Works.')
})

app.get('/api/fast', (req, res, next) => {
  res.status(200).send('Fast response!')
})

app.get('/api/slow', (req, res, next) => {
  setTimeout(() => {
    res.status(200).send('Slow response...')
  }, 1000)
})

app.get('/api/error', (req, res, next) => {
  try {
    throw new Error('Something broke...')
  } catch (error) {
    logger.error(error)
    res.status(500).send(error)
  }
})

app.listen(3000, () => console.log('Server is running on port 3000'))
