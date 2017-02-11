const logger = require('winston');

logger.add(logger.transports.File, { filename: 'log.log'  });
logger.remove(logger.transports.Console);

module.exports = logger;
