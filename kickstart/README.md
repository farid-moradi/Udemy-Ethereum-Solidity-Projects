
# Kickstart Project

This project is part of the Udemy Ethereum and Solidity course, updated for 2024. It is a multipage front-end application aiming to be a decentralized version of Kickstarter.

## Developing the Project

### Creating from Scratch

If you want to create the project from start to finish while watching the videos:

1. Run the following commands:

```
npx create-next-app@latest kickstart
cd kickstart
```

2. Continue with the defaults.

3. Create a directory named `ethereum` and navigate into it:

```
mkdir ethereum
```

4. Initialize Hardhat:

```
npx hardhat init
```

5. Select "create a typescript project" and choose the `ethereum` directory as the root directory for the application. Continue with the defaults.


6. After running tests and ensuring they pass, you can explore other useful commands like:

- Coverage report:

```bash
npx hardhat coverage
```

- Test with gas report:

```bash
REPORT_GAS=true npx hardhat test
```

### Using the Existing Repository

To use the existing repository:

1. Clone the repository:

```bash
git clone https://github.com/farid-moradi/Udemy-Ethereum-Solidity-Projects.git
cd Udemy-Ethereum-Solidity-Projects
```

2. Navigate to the project directory:

```bash
cd kickstart
```

3. Install the necessary dependencies:

```bash
npm install
```

4. Navigate to the `ethereum` directory:

```bash
cd ethereum
```

5. Compile the smart contract:

```bash
npx hardhat compile
```

## Deployment

If you want to test the project on a local Hardhat network:

1. Navigate to the `ethereum` directory and run:

```bash
npx hardhat node
```

2. Deploy it on the local network:

```bash
npx hardhat ignition deploy ignition/modules/Campaign.ts --network localhost
```

3. Copy the created contract address.

4. Create a `.env` file in the root directory and add the following environment variables:

```
ETHEREUM_URL=http://localhost:8545
NEXT_PUBLIC_CONTRACT_ADDRESS=<The-contract-address>
```

  Replace the contract address that you obtained after deploying the contract.

## Additional Notes

- After adding `getSummary` to the contract, you have two options to deploy the newer compiled version of the contract:
  - Delete the `ignition/deployments` directory.
  - Set another deployment id for the deployment.

- Make sure to configure Metamask to connect to the local network.
- You can deploy the contract on other networks by obtaining an URL from Alchemy or Infura and replacing the `http://localhost:8545` and the contract address to work with a public or a test network.
- Although the `npx hardhat compile` creates the types, you can generate necessary types manually using TypeChain:

```
npx hardhat typechain
```

- Update the test files with the following import line to avoid TypeScript errors:

```typescript
import { Campaign__factory } from '../typechain-types/factories';
```

### Troubleshooting

- Ensure you select "add account" in Metamask and use the private key of the accounts created by Hardhat.
- Make sure the website is connected to Metamask.
- If you encounter the error "Transaction reverted without a reason," go to the settings/advanced part of Metamask and select "clear activity tab data."