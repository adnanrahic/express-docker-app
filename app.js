const express = require('express')
const app = express()

setInterval(() => {
  console.log('status')
  console.log('[e383cdcd-9fb2-4d39-9e23-f3c16d1f977c] [c2education] Completed 500 Internal Server Error in 749ms (Views: 0.2ms | ActiveRecord: 481.3ms)')
}, 1000)

app.get('/', async (req, res, next) => {
  res.status(200).send('Hello World!')
  console.log('Hello World!')
})
app.listen(3000, () =>
  console.log('Server is running on port 3000'))
