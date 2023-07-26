import React, {useState} from 'react';
import './App.css';
import {Button} from "./components/Button";
import s from './App.module.css'

function App() {
    let initCountValue = 0
    let maxCountValue = 5
    const [counter, setCounter] = useState<number>(initCountValue)


    const increment = () => {
        if(counter < maxCountValue) {
            setCounter(prev => counter + 1)
        }
    }

    const reset = () => {
        setCounter(initCountValue)
    }
    return (
        <div className={s.App}>
            <div className={ counter < maxCountValue ? s.counter : s.counterDisabled}>{counter}</div>
            <div className={s.btnGroup}>
                <Button className={counter < maxCountValue ? s.btnActive : s.btnDisabled  } title={'inc'} callback={increment}/>
                <Button className={counter === initCountValue ? s.btnDisabled  : s.btnActive   } title={'reset'} callback={reset}/>

            </div>
        </div>
    );
}

export default App;
