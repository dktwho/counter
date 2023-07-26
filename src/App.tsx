import React, {useState} from 'react';
import './App.css';
import {Button} from "./components/Button";
import s from './App.module.css'
import {Counter} from "./components/Counter";

function App() {
    let initCountValue = 0
    let maxCountValue = 5
    let minCountValue = -5
    const [counter, setCounter] = useState<number>(initCountValue)


    const increment = () => {
        if (counter < maxCountValue) {
            setCounter(prev => counter + 1)
        }
    }

    const decrement = () => {
        if (counter > minCountValue) {
            setCounter(prev => counter - 1)
        }
    }
    const reset = () => {
        setCounter(initCountValue)
    }
    return (
        <div className={s.App}>
            <Counter counter={counter} maxCountValue={maxCountValue} />
            <div className={s.btnGroup}>
                <Button className={counter < maxCountValue ? s.btnActive : s.btnDisabled} title={'inc'}
                        callback={increment}/>
                <Button className={counter === initCountValue ? s.btnDisabled : s.btnActive} title={'reset'}
                        callback={reset}/>
                <Button className={counter > minCountValue ? s.btnActive : s.btnDisabled} title={'dec'}
                        callback={decrement}/>
            </div>
        </div>
    );
}

export default App;
