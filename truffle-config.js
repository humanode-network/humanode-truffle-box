const HDWalletProvider = require('@truffle/hdwallet-provider');
const solidityCompilerVersion = '^0.7.0';

// Humanode Development Node config data
const privateKeyDev =
  '99b3c12287537e38c90a9219d4cb074a89a16e9cdb20bf85728ebd97c343e342';
const humanodeRpcUrl = 'http://localhost:9933/';
const humanodeChainId = 2020;

module.exports = {
  networks: {
    // Humanode Development Network
    dev: {
      provider: () => {
        return new HDWalletProvider(
          privateKeyDev,
          humanodeRpcUrl
        );
      },
      network_id: humanodeChainId,
    },
  },
  compilers: {
    solc: {
      version: solidityCompilerVersion,
    },
  }
};
