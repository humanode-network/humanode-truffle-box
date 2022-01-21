const HDWalletProvider = require('@truffle/hdwallet-provider');
// Humanode Development Node Private Key
const privateKeyDev =
    '99b3c12287537e38c90a9219d4cb074a89a16e9cdb20bf85728ebd97c343e342';

module.exports = {
    networks: {
        // Humanode Development Network
        dev: {
            provider: () => {
                if (!privateKeyDev.trim()) {
                    throw new Error(
                        'Please enter a private key with funds, you can use the default one'
                    );
                }
                return new HDWalletProvider(
                    privateKeyDev,
                    'http://localhost:9933/'
                );
            },
            network_id: 2020,
        },
    },
    // Solidity 0.7.0 Compiler
    compilers: {
        solc: {
            version: '^0.7.0',
        },
    }
};