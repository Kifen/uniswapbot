const logger = require('../utils/logger');

const listenEvents = (contract, eventName) => {
  contract.events.PairCreated({}, (error, event) => {
    if (!error) {
      logger.info(`${event.event} event emitted`);
      // console.log('NEW EVENT: ', event.returnValues._account);
    } else {
      logger.error(`Failed to listen on events: ${error.message}`);
    }
  }).on('data', (event) => {
    /*  if (event.event === eventName) {

    } */
  });
};

module.exports = {
  listenEvents,
};
