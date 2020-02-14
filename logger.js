const winston = require('winston')
var options = {
  console: {
    level: 'debug',
    handleExceptions: true,
    json: false,
    colorize: true
  }
}
var logger = winston.createLogger({
  transports: [
    new winston.transports.Console(options.console)
  ],
  exitOnError: false // do not exit on handled exceptions
})
logger.stream = {
  write: (message, encoding) => {
    const m = JSON.parse(message)
    const pm = {
      method: m.method,
      url: m.url,
      status: Number(m.status),
      contentLength: m.contentLength,
      responseTime: Number(m.responseTime)
    }
    logger.info('HTTP LOG', pm)
  }
}
module.exports = logger
