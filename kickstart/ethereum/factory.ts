import Ethersjs from './ethers';
import MyContractArtifact from './artifacts/contracts/Campaign.sol/CampaignFactory.json';
import { Contract } from 'ethers';

const getSigner = async () => {
  const signer = await Ethersjs();
  return signer;
};

const instance = async () => {
  const signer = await getSigner();
  return new Contract(
    process.env.NEXT_PUBLIC_CONTRACT_ADDRESS || '',
    MyContractArtifact.abi,
    signer
  );
};

export default instance;
