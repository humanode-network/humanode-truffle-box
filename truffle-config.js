const HDWalletProvider = require('@truffle/hdwallet-provider');
const solidityCompilerVersion = '^0.7.0';

const alicePrivate = "99b3c12287537e38c90a9219d4cb074a89a16e9cdb20bf85728ebd97c343e342";
const bobPrivate = "8075991ce870b93a8870eca0c0f91913d12f47948ca0fd25b49c6fa7cdbeee8b";
const charliePrivate = "0b6e18cafb6ed99687ec547bd28139cafdd2bffe70e6b688025de6b445aa5c5b";
const davePrivate = "94c49300a58d576011096bcb006aa06f5a91b34b4383891e8029c21dc39fbb8b";
const evePrivate = "4c42532034540267bf568198ccec4cb822a025da542861fcb146a5fab6433ff8";
const ferdiePrivate = "0d6dcaaef49272a5411896be8ad16c01c35d6f8c18873387b71fbc734759b0ab";

// Humanode Development Node config data
const devPrivateKeys =
  [alicePrivate, bobPrivate, charliePrivate, davePrivate, evePrivate, ferdiePrivate];
const humanodeRpcUrl = 'http://localhost:9933/';
const humanodeChainId = 5234;

module.exports = {
  networks: {
    // Humanode Development Network
    dev: {
      provider: () => {
        return new HDWalletProvider(
          devPrivateKeys,
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
