# Lottery Project

## Introduction

This project implements a simple lottery application using React for the front end and Hardhat for smart contract development and testing. The smart contract is written in Solidity.

## Getting Started

If you want to develop the app from scratch, follow these steps:

1. Initialize a Hardhat project by running:

    ```
    npx hardhat init
    ```

2. Select "create a typescript project" when prompted.

3. Compile the smart contracts after making changes in `contracts/Lottery.sol`:

    ```
    npx hardhat compile
    ```

4. Write tests for your contracts and run them:

    ```
    npx hardhat test
    ```

5. For the front-end, create another directory and set up a React project:

    ```
    npx create-react-app lottery-react
    ```

    Note: We separate the Hardhat project and the React project because of how `create-react-app` works. In the future, we can combine the two when using Next.js.

6. Install ethers for Ethereum interaction:

    ```
    npm install --save-dev ethers
    ```

7. Copy the artifacts from the Hardhat project to the React project under the `src` directory.

8. After deploying the contract, install `dotenv` and set the following environment variables:

    ```
    REACT_APP_ETHEREUM_URL=<http://localhost:8545>
    REACT_APP_CONTRACT_ADDRESS=<contract-address>
    ```

    If you deployed the contract using Alchemy or Infura, provide the node URL from those services.

## Testing the Project

To test the project:

1. Clone the project:

    ```
    git clone https://github.com/farid-moradi/Udemy-Ethereum-Solidity-Projects.git
    ```

2. Navigate to the project directory:

    ```
    cd lottery
    ```

3. Install dependencies:

    ```
    npm install
    ```

4. Fill out the `.env` file for any necessary variables, such as for deployment to a network specified in `hardhat.config.ts`.

5. Run Hardhat ignition to deploy contracts after running a node using `npx hardhat node`:

    ```
    npx hardhat ignition deploy ignitions/Lottery.ts
    ```

6. Use the returned contract address to look up the contract on Etherscan.io or use it in other parts of the project.

7. After deploying the contract, navigate to the `lottery-react` directory and run:
    ```
    npm install
    ```

8. Finally, start the frontend:

    ```
    npm start
    ```