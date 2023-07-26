import React, {useState} from 'react';
import './App.css';

function App() {
  const initialCounterValue = 0
  const maxValue = 10
  const [counter, setCounter] = useState(initialCounterValue)


  const increment = () => {
    setCounter(prev => counter + 1)
  }

  const reset = () => {
    setCounter(0)
  }
  return (
    <div className="App">
      {counter}
      <button onClick={increment}>inc</button>
      <button onClick={reset}>reset</button>

    </div>
  );
}

export default App;
