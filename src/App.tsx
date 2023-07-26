import React, {useState} from 'react';
import './App.css';
import {Button} from "./components/Button";

function App() {
    const initialCounterValue = 0
    const maxValue = 5
    const [counter, setCounter] = useState(initialCounterValue)


    const increment = () => {
        setCounter(prev => counter + 1)
    }

    const reset = () => {
        setCounter(initialCounterValue)
    }
    return (
        <div className="App">
            {counter}
            <Button title={'inc'} callback={increment}/>
            <Button title={'reset'} callback={reset}/>

        </div>
    );
}

export default App;
