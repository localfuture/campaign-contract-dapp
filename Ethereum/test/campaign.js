const compiledFactory = artifacts.require("CampaignFactory");
const compiledCampaign  = artifacts.require("Campaign");


/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("campaign factory", function (accounts) {

  let factory;
  let campaignAddress;
  let campaign;

  it("campaign factory deployed", async function () {
    await compiledFactory.deployed();
    return assert.isTrue(true);
  });

  it("campaign instance",async function () {

    factory =  await compiledFactory.deployed();

    await factory.createCampaign('100',{
      from: accounts[0]
    });

    [campaignAddress] = await factory.getDeployedCampaigns({from: accounts[0]});
    campaign = await compiledCampaign.at(campaignAddress);
    assert.ok(factory.address);
    assert.ok(campaign.address);
  });

  it('marks caller as the campaign manager', async () => {
    const manager = await campaign.manager({from: accounts[0]});
    assert.equal(accounts[0], manager);
  });

  it('allows people to contribute money and marks them as approvers', async () => {
    await campaign.contribute({
      value: '200',
      from: accounts[1]
    });
    const isContributor = await campaign.approvers(accounts[1]);
    assert(isContributor);
  });

  it('requires a minimum contribution', async () => {
    try {
      await campaign.contribute({
        value: '5',
        from: accounts[1]
      });
      assert(false);
    } catch (err) {
      assert(err);
    }
  });

  it('allows a manager to make a payment request', async () => {
    await campaign
      .createRequest('Buy batteries', '100', accounts[1],{
        from: accounts[0]
      });
    const request = await campaign.requests(0);

    assert.equal('Buy batteries', request.description);
  });

  it('processes requests', async () => {
    await campaign.contribute({
      from: accounts[0],
      value: web3.utils.toWei('10', 'ether')
    });

    await campaign
      .createRequest('A', web3.utils.toWei('5', 'ether'), accounts[5], { from: accounts[5], gas: '1000000' });

    await campaign.approveRequest(0, {
      from: accounts[5],
      gas: '1000000'
    });

    await campaign.finalizeRequest(0, {
      from: accounts[5],
      gas: '1000000'
    });

    let balance = await web3.eth.getBalance(accounts[5]);
    balance = web3.utils.fromWei(balance, 'ether');
    balance = parseFloat(balance);

    assert(balance > 104);
  });
});
