import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import {Button} from "./components/Button";
import s from './App.module.css'
import {Counter} from "./components/Counter";
import {CounterSettings} from "./components/CounterSettings";


function App() {
    let initCountValue = 0
    const [counter, setCounter] = useState<number>(initCountValue)
    const [startValue, setStartValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(5)

    useEffect(() => {
        getLocalStorageHandler()
    }, [])

    useEffect(() => {
        setLocalStorageHandler()
    }, [counter, maxValue, startValue])


    const onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        setStartValue(Number(e.currentTarget.value))
    }

    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(Number(e.currentTarget.value))
    }

    const appSet = () => {
        localStorage.setItem('counterMaxValue', JSON.stringify(maxValue))
        localStorage.setItem('counterStartValue', JSON.stringify(startValue))
        setCounter(startValue)
        setMaxValue(maxValue)
    }


    const increment = () => {
        if (counter < maxValue) {
            setCounter(prev => counter + 1)
            localStorage.setItem('counterValue', JSON.stringify(counter))
        }
    }

    const reset = () => {
        setCounter(startValue)
    }
    const setLocalStorageHandler = () => {
        localStorage.setItem('counterValue', JSON.stringify(counter))
    }

    const getLocalStorageHandler = () => {
        let counterValueFromLSString = localStorage.getItem('counterValue')
        let counterStartValueFromLSString = localStorage.getItem('counterStartValue')
        let counterMaxValueFromLSString = localStorage.getItem('counterMaxValue')
        if (counterValueFromLSString && counterStartValueFromLSString && counterMaxValueFromLSString) {
            let counterValueFromLSNumber = JSON.parse(counterValueFromLSString)
            let counterStartValueFromLSNumber = JSON.parse(counterStartValueFromLSString)
            let counterMaxValueFromLSNumber = JSON.parse(counterMaxValueFromLSString)
            setStartValue(counterStartValueFromLSNumber)
            setMaxValue(counterMaxValueFromLSNumber)
            setCounter(counterValueFromLSNumber)
        }
    }

    // const clearLocalStorageHandler = () => {
    //     localStorage.clear()
    //     setCounter(initCountValue)
    // }
    //
    // const removeItemFromLocalStorageHandler = () => {
    //     localStorage.removeItem('counterValue + 1')
    // }


    return (
        <div className={s.App}>
            <CounterSettings startValue={startValue} maxValue={maxValue} onChangeStartValue={onChangeStartValue}
                             onChangeMaxValue={onChangeMaxValue} appSet={appSet}/>
            <Counter counter={counter} maxCountValue={maxValue}/>
            <div className={s.btnGroup}>
                <Button className={counter < maxValue ? s.btnActive : s.btnDisabled} title={'inc'}
                        callback={increment}/>
                <Button className={counter === initCountValue ? s.btnDisabled : s.btnActive} title={'reset'}
                        callback={reset}/>
            </div>
        </div>
    );
}

export default App;


