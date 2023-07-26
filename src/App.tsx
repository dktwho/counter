import React, {useState} from 'react';
import './App.css';
import {Button} from "./components/Button";
import s from './App.module.css'

function App() {
    const initialCounterValue = 0
    const maxValue = 5
    const [counter, setCounter] = useState(initialCounterValue)


    const increment = () => {
        setCounter(prev => counter + 1)
        if(counter === maxValue) {
            setCounter(maxValue)
        }
    }

    const reset = () => {
        setCounter(initialCounterValue)
    }
    return (
        <div className="App">
            {counter}

            <Button className={s.btnActive} title={'inc'} callback={increment}/>
            <Button className={s.btnDisabled} title={'reset'} callback={reset}/>

        </div>
    );
}

export default App;
