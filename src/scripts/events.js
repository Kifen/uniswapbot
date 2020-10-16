const logger = require('../utils/logger');
const { Pair } = require('../utils/db');

const newPair = async (tokenA, tokenB, exchangeAddress) => {
  await Pair.create({ tokenA, tokenB, exchangeAddress });
  logger.info(`Added exchage ${exchangeAddress} to database`);
};

const listenEvents = (contract, eventName) => {
  logger.info(`Listening for ${eventName} events`);
  contract.events.PairCreated({}, async (error, event) => {
    if (!error) {
      logger.info(`${event.event} event emitted`);
      await newPair(event.returnValues.token0, event.returnValues.token1, event.returnValues.pair);
    } else {
      logger.error(`Failed to listen on events: ${error.message}`);
    }
  }).on('data', (event) => {
  });
};

module.exports = {
  listenEvents,
};
