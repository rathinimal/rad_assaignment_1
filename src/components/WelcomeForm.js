
import React, { useState } from 'react';

const WelcomeForm = ({ setName }) => {
  const [inputName, setInputName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setName(inputName);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter your name:
        <input 
          type="text" 
          value={inputName} 
          onChange={(e) => setInputName(e.target.value)} 
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default WelcomeForm;
