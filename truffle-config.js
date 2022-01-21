const HDWalletProvider = require('@truffle/hdwallet-provider');
const solidityCompilerVersion = '^0.7.0';

// Humanode Development Node config data
const privateKeyDev =
    '99b3c12287537e38c90a9219d4cb074a89a16e9cdb20bf85728ebd97c343e342';
const humanodeHost = 'http://localhost:9933/';
const humanodeChainId = 42;

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
                    humanodeHost
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