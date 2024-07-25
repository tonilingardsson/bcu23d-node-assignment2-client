import React, { useState } from 'react';
import { addBlock } from '../services/api.jsx';

const AddBlock = () => {
  const [data, setData] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addBlock(data);
    setData('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={data}
        onChange={(e) => setData(e.target.value)}
        placeholder='Enter block data'
      />
      <button type='submit'>Add Block</button>
    </form>
  );
};

export default AddBlock;
