import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [show, setShow]  = useState(true);

  const [counter, setCounter] = useState(0);

  console.log('update one time--', show, counter)
  const batchUpdate = () => {
    setShow(!show);
    setCounter(counter +1);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <button onClick={batchUpdate}>Batch Update</button>
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
    </div>
  );
}

export default App;
