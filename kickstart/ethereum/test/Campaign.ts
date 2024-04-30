import { loadFixture } from '@nomicfoundation/hardhat-toolbox/network-helpers';
import { expect } from 'chai';
import { ethers, ignition } from 'hardhat';
import { Campaign__factory } from '../typechain-types/factories';
import CampaignModule from '../ignition/modules/Campaign';

describe('Campaigns', function () {
  async function deployContractFixture() {
    // Contracts are deployed using the first signer/account by default
    const [owner, account1] = await ethers.getSigners();

    // Using new ignition deployment recommendation by hardhat instead of deployContract
    // const CampaignFactory = await ethers.deployContract('CampaignFactory');
    // const campaignFactory = await CampaignFactory.waitForDeployment();
    const { campaignFactory } = await ignition.deploy(CampaignModule);

    await campaignFactory.createCampaign('100');

    let addresses;
    [addresses] = await campaignFactory.getDeployedCampaigns();

    const campaign = Campaign__factory.connect(addresses, owner);

    return { campaignFactory, campaign, owner, addresses, account1 };
  }

  it('deploys a factory and a compaign', async () => {
    const { campaignFactory, campaign } = await loadFixture(
      deployContractFixture
    );
    expect(ethers.isAddress(campaignFactory.target)).to.true;
    expect(ethers.isAddress(campaign.target)).to.true;
  });

  it('marks caller as the campaign manager', async () => {
    const { campaign, owner } = await loadFixture(deployContractFixture);
    const manager = await campaign.manager();
    console.log('manager', manager);
    expect(owner).to.equal(manager);
  });

  it('allows people to contribute money and marks them as approvers', async () => {
    const { campaign, account1 } = await loadFixture(deployContractFixture);
    await campaign.connect(account1).contribute({ value: '200' });
    const isContributor = await campaign.approvers(account1);
    expect(isContributor).to.true;
  });

  it('requires a minimum contribution', async () => {
    const { campaign, account1 } = await loadFixture(deployContractFixture);
    await expect(
      campaign.connect(account1).contribute({
        value: '5',
      })
    ).to.reverted;
  });

  it('allows a manager to make a payment request', async () => {
    const { campaign, owner, account1 } = await loadFixture(
      deployContractFixture
    );
    await campaign
      .connect(owner)
      .createRequest('Buy batteries', '100', account1);
    const request = await campaign.requests(0);

    expect('Buy batteries').to.equal(request.description);
  });

  it('processes requests', async () => {
    const { campaign, owner, account1 } = await loadFixture(
      deployContractFixture
    );
    await campaign
      .connect(owner)
      .contribute({ value: ethers.parseEther('10') });

    await campaign
      .connect(owner)
      .createRequest('A', ethers.parseEther('5'), account1);

    await campaign.connect(owner).approveRequest(0);

    await campaign.connect(owner).finalizeRequest(0);

    let balance = await ethers.provider.getBalance(account1);
    let balanceBigInt = ethers.parseEther(balance.toString());
    let balanceFinal = parseFloat(balanceBigInt.toString());
    console.log(balanceFinal);
    expect(balanceFinal).to.gt(104);
  });
});
