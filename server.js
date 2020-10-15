const { getWeb3, getWsWeb3 } = require('./src/utils/web3');
const uniswapAbi = require('./src/abi/uniswapfactory');
const { listenEvents } = require('./src/scripts/events');

const web3 = getWsWeb3();
const contract = new web3.eth.Contract(uniswapAbi, '0x9c83dCE8CA20E9aAF9D3efc003b2ea62aBC08351');
listenEvents(contract, 'PairCreated');
