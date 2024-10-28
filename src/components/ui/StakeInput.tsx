import React, { useState } from 'react';
import { z } from 'zod';

const stakeSchema = z.number().positive();

const StakeInput = () => {
  const [stake, setStake] = useState('');
  const [error, setError] = useState(false);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setStake(value);
    try {
      stakeSchema.parse(Number(value));
      setError(false);
    } catch {
      setError(true);
    }
  };

  return (
    <div>
      <input
        type="number"
        id="stake"
        name="stake"
        placeholder="Enter amount to stake"
        value={stake}
        onChange={handleInputChange}
        style={{
          width: '100%',
          padding: '0.5rem',
          marginTop: '0.5rem',
          border: error ? '1px solid red' : '1px solid #ccc',
          borderRadius: '4px'
        }}
      />
      {error && <p style={{ color: 'red', marginTop: '0.5rem' }}>Please enter a valid positive number.</p>}
    </div>
  );
};

export default StakeInput;