require('dotenv').config();
const Web3 = require('web3');

const getWeb3 = () => {
  const web3 = new Web3(process.env.RPC_KOVAN);
  return web3;
};

const getWsWeb3 = () => {
  const web3 = new Web3(process.env.RPC_WS_KOVAN);
  return web3;
};

module.exports = {
  getWeb3,
  getWsWeb3,
};
