import { HardhatUserConfig } from 'hardhat/config';
import '@nomicfoundation/hardhat-toolbox';
import * as dotenv from 'dotenv';

dotenv.config();

interface EnvVars {
  SEPOLIA_URL: string;
  PRIVATE_KEY: string;
}

const env: EnvVars = {
  SEPOLIA_URL: process.env.SEPOLIA_URL || '',
  PRIVATE_KEY: process.env.PRIVATE_KEY || '',
};

const config: HardhatUserConfig = {
  solidity: '0.8.24',
  networks: {
    sepolia: {
      url: env.SEPOLIA_URL,
      accounts: [env.PRIVATE_KEY],
    },
  },
};

export default config;
