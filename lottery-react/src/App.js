import lottery from './lottery';
import { useEffect, useState } from 'react';
import signer, { provider } from './ethers';
import { ethers } from 'ethers';

function App() {
  const [manager, setManager] = useState('');
  const [players, setPlayers] = useState([]);
  const [balance, setBalance] = useState('');
  const [value, setValue] = useState('');
  const [message, setMessage] = useState('');
  const [transactionCompleted, setTransactionCompleted] = useState(true);

  useEffect(() => {
    const fetchContractData = async () => {
      setManager(await lottery.manager());
      setPlayers(await lottery.getPlayers());
      setBalance(await provider.getBalance(lottery.target));
    };

    if (transactionCompleted) {
      fetchContractData();
      setTransactionCompleted(false);
    }
  }, [transactionCompleted]);

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    const tipIn = { value: ethers.parseEther(value) };

    setMessage('Waiting on transaction success...');
    const lotteryTxn = await lottery.enter(tipIn);
    await lotteryTxn.wait();
    setMessage('You have been entered!');
    setTransactionCompleted(true);
  };

  const onClickHandler = async () => {
    setMessage('Waiting on transaction success...');
    const lotteryTxn = await lottery.pickWinner();
    await lotteryTxn.wait();
    setMessage('A winner has been picked!');
    setTransactionCompleted(true);
  };

  return (
    <div className="App">
      <h2 style={{ width: '50%', textAlign: 'center', margin: 'auto' }}>
        Lottery Contract
      </h2>
      <p>
        This contract is manged by <b>{manager}</b>
        There are currently {players.length} people entered, competing to win{' '}
        {ethers.formatEther(balance || 0)} ETH!
      </p>
      <hr />

      <form onSubmit={onSubmitHandler}>
        <h4>Want to try your luck?</h4>
        <div>
          <label>Amount of ether to enter </label>
          <input
            value={value}
            onChange={(event) => setValue(event.target.value)}
          />
        </div>
        <button>Enter</button>
      </form>

      <hr />

      <h4>Ready to pick a winner</h4>
      <button onClick={onClickHandler}>Pick a winner!</button>

      <hr />
      <h1>{message}</h1>
    </div>
  );
}

export default App;
