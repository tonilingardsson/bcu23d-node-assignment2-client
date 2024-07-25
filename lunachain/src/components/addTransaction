import { useState } from "react"

const AddTransaction = () => {
    const [sender, setSender] = useState('')
    const [receiver, setReceiver] = useState('')
    const [amount, setAmount] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5001/api/v1/transactions/transaction', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('token')}` },
                body: JSON.stringify({ sender, receiver, amount }),
            });
            if (response.ok) {
                const result = await response.json();
                console.log(result);
            }
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className="add-transaction">
            <form onSubmit={handleSubmit}>
                <label>From:</label>
                <input type="text" value={sender} onChange={(e) => setSender(e.target.value)} placeholder="Enter sender's address" />
                <label>To:</label>
                <input type="text" value={receiver} onChange={(e) => setReceiver(e.target.value)} placeholder="Enter receiver's address" />
                <label>Amount:</label>
                <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount" />
                <button type="submit">Add Transaction</button>
            </form>
        </div>
    );
};

export default AddTransaction;