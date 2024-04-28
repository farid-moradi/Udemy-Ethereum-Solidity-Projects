import { loadFixture } from '@nomicfoundation/hardhat-toolbox/network-helpers';
import { expect } from 'chai';
import { ethers } from 'hardhat';

describe('Campaigns', function () {
  async function deployContractFixture() {
    // Contracts are deployed using the first signer/account by default
    const [owner, account1, account2, account3] = await ethers.getSigners();

    const CampaignFactory = await ethers.deployContract('CampaignFactory');
    const campaignFactory = await CampaignFactory.waitForDeployment();

    await campaignFactory.connect(owner).createCampaign('100');

    let addresses;
    [addresses] = await campaignFactory.connect(owner).getDeployedCampaigns();

    const Campaign = await ethers.getContractFactory('Campaign');
    const campaign = Campaign.attach(addresses);

    return { campaignFactory, campaign, owner, addresses };
  }

  it('deploys a factory and a compaign', async () => {
    const { campaignFactory, campaign } = await loadFixture(
      deployContractFixture
    );
    expect(ethers.isAddress(campaignFactory.target)).to.be.true;
    expect(ethers.isAddress(campaign.target)).to.be.true;
  });
});
