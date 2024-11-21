import React, { Suspense, useState, useTransition } from 'react';
import logo from './logo.svg';
import './App.css';
import DogShow from './components/DogShow';
import Todo from './components/Todo';

function App() {
  const [show, setShow]  = useState(true);

  const [counter, setCounter] = useState(0);
  const [inputVal, setInputVal] = useState<string>();
  const [searchVal, setSaerchVal] = useState<number[]>([]);

  const [isPending, startTransition] = useTransition(); // 获取transition 的状态
  console.log('update one time--', show, counter)
  // let a = 'ssss';
  // if (a == 'sss') {
    
  // }
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
        <Suspense fallback='<p>loading dog show</p>'>
          <DogShow />
        </Suspense>
        <Suspense fallback='<p>loading todo</p>'>
          <Todo />
        </Suspense>
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
