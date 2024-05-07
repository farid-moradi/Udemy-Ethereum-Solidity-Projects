import { Contract } from 'ethers';
import Ethersjs from './ethers';
import CampaignArtifact from './artifacts/contracts/Campaign.sol/Campaign.json';

export default async (address: string) => {
  const getSigner = async () => {
    const signer = await Ethersjs();
    return signer;
  };

  const instance = async () => {
    const signer = await getSigner();
    return new Contract(address || '', CampaignArtifact.abi, signer);
  };
  const contractInstance = await instance();
  return contractInstance;
};
