import { loadFixture } from '@nomicfoundation/hardhat-toolbox/network-helpers';
import { expect } from 'chai';
import { ethers } from 'hardhat';

describe('Inbox', function () {
  async function deployContractFixture() {
    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await ethers.getSigners();

    const message = 'Hi there!';

    const Inbox = await ethers.deployContract('Inbox', [message]);
    const inbox = await Inbox.waitForDeployment();

    return { inbox, owner, otherAccount, message };
  }

  it('deploys a contract', async () => {
    const { inbox } = await loadFixture(deployContractFixture);
    // Check if the contract address is a valid Ethereum address
    expect(ethers.isAddress(inbox.target)).to.be.true;
  });

  it('Should set the right initial message', async function () {
    const { inbox, message } = await loadFixture(deployContractFixture);

    expect(await inbox.message()).to.equal(message);
  });

  it('can change the message', async () => {
    const { inbox } = await loadFixture(deployContractFixture);

    await inbox.setMessage('bye');
    expect(await inbox.message()).to.be.equal('bye');
  });
});
