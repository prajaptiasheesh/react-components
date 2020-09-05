import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [ value, setValue] = useState('');

  useEffect(() => {
    
    
  }, [])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>)=>{

    event.persist()
    setValue(()=>event.target.value);
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <input type="text" onChange={handleChange} value={value} name="name" id="name" placeholder="Enter your name" />
    </div>
  );
}

export default App;
