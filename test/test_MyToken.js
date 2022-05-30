// Example test script
const Token = artifacts.require("MyToken");

contract('MyToken', accounts => {
  let token;
  const _totalSupply = "8000000000000000000000000";
  beforeEach(async () => {
    // Deploy token contract
    token = await Token.new(_totalSupply, { from: accounts[0] });
  });
  // Check Total Supply
  it("checks total supply", async () => {
    const totalSupply = await token.totalSupply.call();
    assert.equal(totalSupply, _totalSupply, 'total supply is wrong');
  });

  // Check the balance of the owner of the contract
  it("should return the balance of token owner", async () => {
    // Prepare test data
    const alice = accounts[0];

    // Check balance
    const balance = await token.balanceOf.call(alice);
    assert.equal(balance, _totalSupply, 'balance is wrong');
  });

  // Transfer token and check balances
  it("should transfer token", async () => {
    // Prepare test data
    const amount = "1000000000000000000";
    const alice = accounts[0];
    const bob = accounts[1];

    // Transfer method
    await token.transfer(bob, amount, { from: alice });
    balanceBob = await token.balanceOf.call(bob);
    assert.equal(balanceBob, amount, 'Bob balance is wrong');
  });

  describe('dev account transfers', () => {
    // Make sure dev accounts have enough gas.
    beforeEach(async () => {
      const alice = accounts[0];
      const bob = accounts[1];
      const charlie = accounts[2];

      const amount =  "100000000000000000";

      await web3.eth.sendTransaction({from: alice, to: bob, value: amount});
      await web3.eth.sendTransaction({from: alice, to: charlie, value: amount});
    });

    // Set an allowance to an account, transfer from that account, check balances
    it("should give accounts[1] authority to spend accounts[0]'s token", async () => {
      // Prepare test data
      const amountAllow = "10000000000000000000";
      const amountTransfer = "1000000000000000000";
      const alice = accounts[0];
      const bob = accounts[1];
      const charlie = accounts[2];

      // Approve Bob to spend from Alice
      await token.approve(bob, amountAllow, { from: alice });
      const allowance = await token.allowance.call(alice, bob);
      assert.equal(allowance, amountAllow, 'allowance is wrong');

      // Transfer tokens and check new balances
      await token.transferFrom(alice, charlie, amountTransfer, { from: bob });
      const balanceBob = await token.balanceOf.call(bob);
      assert.equal(balanceBob, 0, 'Bob balance is wrong');
      const balanceCharlie = await token.balanceOf.call(charlie);
      assert.equal(balanceCharlie, amountTransfer, 'Charlie balance is wrong');
    })
  });
});
