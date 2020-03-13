const cluster = require('cluster')
const numCPUs = require('os').cpus().length
const app = require('./app')
const port = process.env.PORT || 3000

const masterProcess = () => Array.from(Array(numCPUs)).map(cluster.fork)
const childProcess = () => app.listen(port)
if (cluster.isMaster) masterProcess()
else childProcess()
cluster.on('exit', (worker) => cluster.fork())
