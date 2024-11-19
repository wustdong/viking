import React, { useState, useTransition } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [show, setShow]  = useState(true);

  const [counter, setCounter] = useState(0);
  const [inputVal, setInputVal] = useState<string>();
  const [searchVal, setSaerchVal] = useState<number[]>([]);

  const [isPending, startTransition] = useTransition(); // 获取transition 的状态
  console.log('update one time--', show, counter)
  const batchUpdate = () => {
    setShow(!show);
    setCounter(counter +1);
  }

  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputVal(e.target.value)

    startTransition(() => {
      const arr = Array.from({length: 10000}, (_, i) => new Date().getTime() + i);
      setSaerchVal(arr);
    })
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <button onClick={batchUpdate}>Batch Update</button>
        </p>
        <p>
          <input onChange={inputChange} value={inputVal}/>
          
        </p>
        {isPending && <div>⏳</div>}
        {searchVal.map((s, index) => {
            return <div key={index}>{s}</div>
          })}
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
