import React, { useState } from 'react';

export default function Home() {
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addData = () => {
    setData((prevData) => [...prevData, inputValue]);
    setInputValue(''); 
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addData();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Enter Data:
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">
          Add Data
        </button>
      </form>
      <ol>
        {data.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
    </div>
  );
}
