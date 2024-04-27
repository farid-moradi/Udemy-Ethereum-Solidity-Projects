import signer from './ethers';
import MyContractArtifact from './artifacts/contracts/Lottery.sol/Lottery.json';
import { Contract } from 'ethers';

export default new Contract(
  process.env.REACT_APP_CONTRACT_ADDRESS,
  MyContractArtifact.abi,
  signer
);
