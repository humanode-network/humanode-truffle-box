# Humanode Truffle Box

Truffle predefined setup to deploy and test Ethereum smart contracts on Humanode.

## Steps

1. Clone this repo.

2. With the files in your local system, the next step is to install all dependencies by running:

`npm install`

3. Compile and tests contracts.

`./node_modules/.bin/truffle compile` - to compile

`./node_modules/.bin/truffle test` - to test

4. Deploy to Humanode network.

`./node_modules/.bin/truffle migrate --network dev`
