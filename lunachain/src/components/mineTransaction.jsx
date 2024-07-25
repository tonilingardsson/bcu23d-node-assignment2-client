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
    <div>
      <h2>Mine Transaction</h2>
      <button type='submit' onClick={mineBlock}>
        Mine
      </button>
    </div>
  );
};

export default MineTransaction;
