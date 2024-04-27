import { ethers } from 'ethers';

let signer = null;

let provider;

if (window.ethereum == null) {
  console.log('MetaMask not installed; using read-only defaults');

  provider = new ethers.JsonRpcProvider(process.env.REACT_APP_ETHEREUM_URL);
  signer = await provider.getSigner();
} else {
  provider = new ethers.BrowserProvider(window.ethereum);
  signer = await provider.getSigner();
}
export { provider, signer };
export default signer;
