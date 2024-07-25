/* eslint-disable react/prop-types */
import { useState } from 'react';
import Transaction from './Transaction.jsx';

function Block({ block, isFirstBlock }) {
  const [displayDetails, setDisplayDetails] = useState(isFirstBlock);
  const shortHash = `${block.hash.substring(0, 15)}...`;
  const shortHandData =
    JSON.stringify(block.data).length > 40
      ? `${JSON.stringify(block.data).substring(1, 40)}...`
      : JSON.stringify(block.data);

  const renderDetails = () => {
    if (displayDetails) {
      return (
        <section>
          <div className='btn-container'>
            <button
              className='btn'
              onClick={() => setDisplayDetails(!displayDetails)}
            >
              Hide
            </button>
          </div>
          <div>
            {block.data.map((transaction) => (
              <div key={transaction.id}>
                <Transaction transaction={transaction} />
              </div>
            ))}
          </div>
        </section>
      );
    } else {
      return (
        <section>
          <div className='btn-container'>
            <button
              className='btn'
              onClick={() => setDisplayDetails(!displayDetails)}
            >
              Show details
            </button>
          </div>
          <div>{shortHandData}</div>
        </section>
      );
    }
  };

  return (
    <div className='block'>
      <div className='block-header'>
        <div className='hash'>Hash: {shortHash}</div>
        <div className='timestampt'>
          Timestamp: {new Date(block.timestamp).toLocaleDateString('sv-SE')}
        </div>
        {renderDetails()}
      </div>
    </div>
  );
}

export default Block;
