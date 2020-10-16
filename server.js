const { getWeb3, getWsWeb3 } = require('./src/utils/web3');
const { connectDB } = require('./src/utils/db');
const uniswapAbi = require('./src/abi/uniswapfactory');
const { listenEvents } = require('./src/scripts/events');

connectDB();
const web3 = getWsWeb3();
const contract = new web3.eth.Contract(uniswapAbi, '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f');
listenEvents(contract, 'PairCreated');
