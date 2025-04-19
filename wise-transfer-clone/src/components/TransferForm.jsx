import React, { useState } from 'react';

const corridors = [
  { label: 'India to Australia', value: 'IN-AU' },
  { label: 'Australia to India', value: 'AU-IN' },
  { label: 'India to United Kingdom', value: 'IN-UK' },
  { label: 'United Kingdom to India', value: 'UK-IN' },
  { label: 'Australia to United Kingdom', value: 'AU-UK' },
  { label: 'United Kingdom to Australia', value: 'UK-AU' },
];

// Static exchange rates and fees for demo purposes
const exchangeRates = {
  'IN-AU': 0.018,
  'AU-IN': 55.5,
  'IN-UK': 0.010,
  'UK-IN': 80.0,
  'AU-UK': 0.56,
  'UK-AU': 1.78,
};

const fees = {
  'IN-AU': 5,
  'AU-IN': 7,
  'IN-UK': 4,
  'UK-IN': 6,
  'AU-UK': 5,
  'UK-AU': 7,
};

export default function TransferForm() {
  const [corridor, setCorridor] = useState('IN-AU');
  const [amount, setAmount] = useState('');
  const [recipient, setRecipient] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!amount || !recipient) {
      alert('Please fill in all fields');
      return;
    }
    const rate = exchangeRates[corridor];
    const fee = fees[corridor];
    const convertedAmount = (parseFloat(amount) * rate).toFixed(2);
    setResult({
      convertedAmount,
      fee,
      total: (parseFloat(amount) + fee).toFixed(2),
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 font-mono">
      <div>
        <label htmlFor="corridor" className="block mb-1 text-indigo-700 font-bold">
          Select Corridor
        </label>
        <select
          id="corridor"
          value={corridor}
          onChange={(e) => setCorridor(e.target.value)}
          className="w-full border border-indigo-400 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600"
        >
          {corridors.map((c) => (
            <option key={c.value} value={c.value}>
              {c.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="amount" className="block mb-1 text-indigo-700 font-bold">
          Amount to Send
        </label>
        <input
          type="number"
          id="amount"
          min="1"
          step="any"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount"
          className="w-full border border-indigo-400 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600"
          required
        />
      </div>

      <div>
        <label htmlFor="recipient" className="block mb-1 text-indigo-700 font-bold">
          Recipient Name
        </label>
        <input
          type="text"
          id="recipient"
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
          placeholder="Enter recipient's full name"
          className="w-full border border-indigo-400 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-indigo-700 text-white font-bold py-2 rounded hover:bg-indigo-800 transition-colors"
      >
        Transfer
      </button>

      {result && (
        <div className="mt-6 p-4 border border-indigo-400 rounded bg-indigo-50 text-indigo-900">
          <p>
            Converted Amount: <strong>{result.convertedAmount}</strong>
          </p>
          <p>
            Transfer Fee: <strong>{result.fee}</strong>
          </p>
          <p>
            Total Cost: <strong>{result.total}</strong>
          </p>
        </div>
      )}
    </form>
  );
}
