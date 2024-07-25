const MineTransaction = () => {
  const mineBlock = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        'http://localhost:5001/api/v1/transactions/mine',
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );
      if (!response.ok) {
        console.log(response.statusText);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='mine component'>
      <h2>Mine Transaction</h2>
      <div>
        <button type='submit' onClick={mineBlock}>
          Mine
        </button>
        <p>Refresh page to visualize the new block (temporary)</p>
      </div>
    </div>
  );
};

export default MineTransaction;
