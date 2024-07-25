import { useState, useEffect } from 'react';
import Block from './Block';
// COPY loadBlockchain on services/api IMPORT IT INSTEAD OF fetchBlockchain and ERASE loadBlockchain on this file
// Do the same with the other functions/API endpoints
// import { fetchBlockchain } from '../services/api';

function Blockchain() {
  const [blockchain, setBlockchain] = useState([]);

  useEffect(() => {
    loadBlockchain();
  }, []);

  const loadBlockchain = async () => {
    try {
      const response = await fetch('http://localhost:5001/api/v1/blockchain');
      if (response.ok) {
        const result = await response.json();
        setBlockchain(result.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  console.log(blockchain);
  return (
    <div className='blockchain'>
      <h2 className='title'>LunaChain's Blocks</h2>
      {blockchain.map((block) => (
        <Block className='block' key={block.hash} block={block} />
      ))}
    </div>
  );
}
export default Blockchain;
