import React, {useState} from 'react';
import './App.css';
import {Button} from "./components/Button";
import s from './App.module.css'
import {Counter} from "./components/Counter";

function App() {
    let initCountValue = 0
    let maxCountValue = 5
    const [counter, setCounter] = useState<number>(initCountValue)


    const increment = () => {
        if (counter < maxCountValue) {
            setCounter(prev => counter + 1)
        }
    }

    const reset = () => {
        setCounter(initCountValue)
    }
    const setLocalStorageHandler = () => {
        localStorage.setItem('counterValue', JSON.stringify(counter))
    }

    const getLocalStorageHandler = () => {
        let counterValueFromLSString = localStorage.getItem('counterValue')
        if(counterValueFromLSString) {
            let counterValueFromLSNumber = JSON.parse(counterValueFromLSString)
            setCounter(counterValueFromLSNumber)
        }
    }


    return (
        <div className={s.App}>
            <Counter counter={counter} maxCountValue={maxCountValue}/>
            <div className={s.btnGroup}>
                <Button className={counter < maxCountValue ? s.btnActive : s.btnDisabled} title={'inc'}
                        callback={increment}/>
                <Button className={counter === initCountValue ? s.btnDisabled : s.btnActive} title={'reset'}
                        callback={reset}/>
                <button onClick={setLocalStorageHandler}>SET to local storage</button>
                <button onClick={getLocalStorageHandler}>GET to local storage</button>
            </div>
        </div>
    );
}

export default App;
