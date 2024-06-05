import { ethers } from 'ethers';

const Ethersjs = async () => {
  let provider = null;
  let signer = null;
  if (
    typeof window !== 'undefined' &&
    typeof (window as any).ethereum !== 'undefined'
  ) {
    console.log('we are in the browser and metamask is running');
    const { ethereum } = window as any;

    provider = new ethers.BrowserProvider(ethereum);
    signer = await provider.getSigner();
    return signer;
  }

  // Sepolia connection
  // provider = new ethers.JsonRpcProvider(process.env.NEXT_PUBLIC_ETHEREUM_URL);
  // provider = new AlchemyProvider('sepolia', process.env.NEXT_PUBLIC_API_KEY);

  // Polygon Cardano connection
  provider = new ethers.JsonRpcProvider(process.env.ETHEREUM_URL);
  const privateKey = process.env.PRIVATE_KEY;
  signer = new ethers.Wallet(privateKey as string, provider);

  // Local connection
  // provider = new ethers.JsonRpcProvider(process.env.ETHEREUM_URL);
  // signer = await provider.getSigner();
  return signer;
};

export default Ethersjs;
