# Lottery Project (With Front-end)

This project is part of the Udemy Ethereum and Solidity course, updated for 2024. It is a front-end application for the lottery smart contract developed in the previous section.

## Getting Started

### Creating from Scratch

If you want to start from scratch while watching the videos:

1. Run the following commands:

```bash
npx create-react-app@latest lottery-react
cd lottery-react
npm install ethers dotenv
```

2. Continue with the development process.

### Using the Repository

To use the repository:

1. Clone the repository:

```bash
git clone https://github.com/farid-moradi/Udemy-Ethereum-Solidity-Projects.git
cd Udemy-Ethereum-Solidity-Projects
```

2. Navigate to the `lottery-react` directory

3. Install dependencies:

```bash
npm install
```

## Deployment

After preparing artifacts in the Lottery project by running the following commands:

```bash
npx hardhat compile
npx hardhat ignition deploy ignition/modules/Lottery.ts --network localhost
```

to deploy the contract on a local node that has been started by running `npx hardhat node` on the root directory of the lottery project, move the artifacts from `/lottery/artifacts` to `/lottery-react/src/hardhat`.

Then run `npm run start` to start the project and access it on [http://localhost:3000](http://localhost:3000).

Create a `.env` file in the root directory and add the following environment variables:

```
REACT_APP_ETHEREUM_URL=http://localhost:8545
REACT_APP_CONTRACT_ADDRESS=<The-contract-address>
```

Replace the contract address that you obtained after deploying the contract.

Note that you should create a manual network on Metamask that is running on `http://127.0.0.1:8545` and has Id Chain 31337.