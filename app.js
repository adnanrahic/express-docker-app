require('dotenv').config()
require('spm-agent-nodejs')

const express = require('express')
const app = express()
app.get('/', (req, res, next) => {
  console.log('Hello World!')
  res.status(200).send('Hello World!')
})

module.exports = app
