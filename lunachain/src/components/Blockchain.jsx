import { useState, useEffect } from 'react';

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
  return <div>Blockchain</div>;
}
export default Blockchain;
