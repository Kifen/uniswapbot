// create a secrets.json file in root, add object {projectId:
// INFURA_PROJECT_ID, mnemonic: Wallet mnemonic}
const HDWalletProvider = require('@truffle/hdwallet-provider');
const { projectId, mnemonic } = require('./secrets.json');

module.exports = {
  networks: {
    development: {
      protocol: 'http',
      host: 'localhost',
      port: 8545,
      gas: 5000000,
      gasPrice: 5e9,
      networkId: '*',
    },
    ropsten: {
      provider: () => new HDWalletProvider(
        mnemonic,
        `https://ropsten.infura.io/v3/${projectId}`,
      ),
      networkId: 3,
      gasPrice: 10e9,
    },
  },
};
