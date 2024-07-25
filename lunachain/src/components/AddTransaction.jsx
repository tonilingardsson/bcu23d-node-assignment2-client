import { useState } from 'react';

const AddTransaction = () => {
  const [sender, setSender] = useState('');
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        'http://localhost:5001/api/v1/transactions/transaction',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
          body: JSON.stringify({ sender, recipient, amount }),
        }
      );
      if (response.ok) {
        const result = await response.json();
        setSender('');
        setRecipient('');
        setAmount('');
        console.log(result);
      } else {
        console.log(response.statusText);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className='add-transaction'>
      <h2>Add Transaction</h2>
      <form onSubmit={handleSubmit}>
        <label>To:</label>
        <input
          type='text'
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
          placeholder="Enter recipient's address"
        />
        <label>Amount:</label>
        <input
          type='number'
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder='Enter amount'
        />
        <button type='submit'>Add Transaction</button>
      </form>
    </div>
  );
};

export default AddTransaction;
