import { useState } from 'react';

export default function Home() {
  const [name, setName] = useState('');
  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <label htmlFor="nameInput">Name:</label>
      <input
        type="text"
        id="nameInput"
        placeholder="Type your name"
        value={name} 
        onChange={handleInputChange} 
        style={{ margin: '10px', padding: '5px' }}
      />
      <h2>
        Hi <span>{name}</span>, <span>{name}</span>
      </h2>
    </div>
  );
}


