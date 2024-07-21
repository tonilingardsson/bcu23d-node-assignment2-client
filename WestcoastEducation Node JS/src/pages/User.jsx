import { useEffect, useState } from 'react';
import { getUserAccount } from '../services/userService';
import {
  getTransactions,
  mineTransactions,
} from '../services/transactionService';

function User() {
  const [user, setUser] = useState({});
  const [wallet, setWallet] = useState({});

  async function getUserInfo() {
    const token = localStorage.getItem('TOKEN');

    setUser(await getUserAccount(token));
    setWallet(await getTransactions(token));
  }

  useEffect(() => {
    getUserInfo();
  }, []);

  async function mineNewBlock() {
    const token = localStorage.getItem('TOKEN');
    await mineTransactions(token);

    getUserInfo();
  }

  return (
    <>
      <h2>My Account</h2>

      <ul>
        <li>{wallet?.address}</li>

        <li>{wallet?.balance} LUNA</li>

        <li>{user?.name}</li>

        <li>{user?.email}</li>

        <li>{user?.role}</li>
      </ul>
      <div>
        <button onClick={mineNewBlock}>Mine transactions</button>
      </div>
    </>
  );
}

export default User;
