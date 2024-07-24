import { useState, useEffect } from 'react';
import Block from './Block';

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
  return (
    <div className='blockchain'>
      <h2 className='title'>LunaChain</h2>
      {blockchain.map((block) => (
        <Block className='block' key={block.hash} block={block} />
      ))}
    </div>
  );
}
export default Blockchain;
