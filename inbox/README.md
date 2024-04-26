# Inbox Project

This project is part of the Udemy Ethereum and Solidity course, updated for 2024. It contains a simple smart contract called "Inbox" implemented in Solidity.

## Setup

1. Initialize the project with Hardhat:
   ```bash
   npx hardhat init
   ```

2. Install required dependencies:
   ```bash
   npm install dotenv
   ```

3. Create a `.env` file in the project root and define the following variables:
   ```
   SEPOLIA_URL=<Alchemy SEPOLIA Node URL>
   PRIVATE_KEY=<Your SEPOLIA Private Key>
   ```
   Note: You can obtain the SEPOLIA node URL from Alchemy by creating a project.


## Testing

Run tests using Hardhat:
```bash
npx hardhat test
```

## Deployment

Deploy the contract using Hardhat:
```bash
npx hardhat ignition deploy ignition/modules/Inbox.ts --network <sepolia>
```
Replace `<sepolia>` with the desired network defined in the Hardhat config file.

Once deployed, you can investigate the contract on [Sepolia Etherscan](https://sepolia.etherscan.io) and even decompile the contract from bytecode.

<!-- ## Notes

- This project utilizes Hardhat for development and testing.
- For more information on why Hardhat was chosen over Truffle and why ethers.js was chosen over web3.js, check out the blog post on [devfmd.xyz](https://devfmd.xyz). -->