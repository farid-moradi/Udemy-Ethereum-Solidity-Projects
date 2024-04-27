import { loadFixture } from '@nomicfoundation/hardhat-toolbox/network-helpers';
import { expect } from 'chai';
import { ethers } from 'hardhat';

describe('Lottery', function () {
  async function deployContractFixture() {
    // Contracts are deployed using the first signer/account by default
    const [owner, account1, account2, account3] = await ethers.getSigners();

    const Lottery = await ethers.deployContract('Lottery');
    const lottery = await Lottery.waitForDeployment();

    return { lottery, owner, account1, account2, account3 };
  }

  it('deploys a contract', async () => {
    const { lottery } = await loadFixture(deployContractFixture);
    expect(ethers.isAddress(lottery.target)).to.be.true;
  });

  it('allows one account to enter', async () => {
    const { lottery, account1 } = await loadFixture(deployContractFixture);
    const tipIn = { value: ethers.parseEther('1') };

    await lottery.connect(account1).enter(tipIn);

    const players = await lottery.getPlayers();

    expect(account1).to.equal(players[0]);
    expect(players.length).to.equal(1);
  });

  it('allows multiple accounts to enter', async () => {
    const { lottery, account1, account2, account3 } = await loadFixture(
      deployContractFixture
    );

    const tipIn = { value: ethers.parseEther('1') };

    await lottery.connect(account1).enter(tipIn);
    await lottery.connect(account2).enter(tipIn);
    await lottery.connect(account3).enter(tipIn);

    const players = await lottery.getPlayers();

    expect(account1).to.equal(players[0]);
    expect(account2).to.equal(players[1]);
    expect(account3).to.equal(players[2]);
    expect(players.length).to.equal(3);
  });

  it('requires a minimum amount of ether to enter', async () => {
    const { lottery, account1 } = await loadFixture(deployContractFixture);
    const tipIn = { value: ethers.parseEther('0.005') };

    await expect(lottery.connect(account1).enter(tipIn)).to.be.revertedWith(
      'You need to invest more that 0.01 Eth'
    );
  });

  it('only manager can call pickWinner', async () => {
    const { lottery, account1 } = await loadFixture(deployContractFixture);

    await expect(lottery.connect(account1).pickWinner()).to.be.revertedWith(
      'Only the manager can choose the winer'
    );
  });

  it('sends money to the winner and resets the players array', async () => {
    const { lottery, owner, account1 } = await loadFixture(
      deployContractFixture
    );
    const tipIn = { value: ethers.parseEther('1') };

    // For watching the balance information
    // console.log('before');
    // console.log(ethers.formatEther(await ethers.provider.getBalance(account1)));
    // console.log(
    //   ethers.formatEther(await ethers.provider.getBalance(lottery.target))
    // );

    await expect(lottery.connect(account1).enter(tipIn)).to.changeEtherBalance(
      lottery.target,
      tipIn.value
    );

    // For watching the balance information
    // console.log('after');
    // console.log(ethers.formatEther(await ethers.provider.getBalance(account1)));
    // console.log(
    //   ethers.formatEther(await ethers.provider.getBalance(lottery.target))
    // );

    await expect(lottery.connect(owner).pickWinner()).to.changeEtherBalance(
      account1,
      tipIn.value
    );
  });
});
