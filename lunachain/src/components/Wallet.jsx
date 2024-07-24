import { useEffect, useState } from 'react';

function Wallet() {
  const [wallet, setWallet] = useState({});

  useEffect(() => {
    getWalletInfo();
  }, []);

  const getWalletInfo = async () => {
    try {
      const response = await fetch('http://localhost:5001/api/v1/wallet');
      if (response.ok) {
        const result = await response.json();
        setWallet(result.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className='wallet'>
      <h2 className='title'>LunaChain</h2>
      <div className='wallet-info'>
        <span>Address: {wallet.address}</span>
        <span>Balance: {wallet.balance}</span>
      </div>
    </div>
  );
}

export default Wallet;
