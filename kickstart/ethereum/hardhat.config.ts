import { HardhatUserConfig } from 'hardhat/config';
import '@nomicfoundation/hardhat-toolbox';
require('dotenv').config();

const config: HardhatUserConfig = {
  solidity: '0.8.24',
  networks: {
    sepolia: {
      accounts: [`${process.env.PRIVATE_KEY}`],
      url: `https://eth-sepolia.g.alchemy.com/v2/${process.env.API_KEY}`,
    },
    polygonZk: {
      accounts: [`${process.env.PRIVATE_KEY}`],
      url: process.env.ETHEREUM_URL,
    },
  },
};

export default config;
