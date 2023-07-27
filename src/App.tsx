import React, {useEffect, useState} from 'react';
import './App.css';
import {Button} from "./components/Button";
import s from './App.module.css'
import {Counter} from "./components/Counter";


function App() {
    let initCountValue = 0
    let maxCountValue = 5
    const [counter, setCounter] = useState<number>(initCountValue)

    useEffect(() => {
        getLocalStorageHandler()
    }, [])

    useEffect(() => {
        setLocalStorageHandler()
    }, [counter])


    const increment = () => {
        if (counter < maxCountValue) {
            setCounter(prev => counter + 1)
            localStorage.setItem('counterValue', JSON.stringify(counter))
        }
    }

    const reset = () => {
        setCounter(initCountValue)
    }
    const setLocalStorageHandler = () => {
        localStorage.setItem('counterValue', JSON.stringify(counter))
        // localStorage.setItem('counterValue + 1', JSON.stringify(counter + 1))
    }

    const getLocalStorageHandler = () => {
        let counterValueFromLSString = localStorage.getItem('counterValue')
        if (counterValueFromLSString) {
            let counterValueFromLSNumber = JSON.parse(counterValueFromLSString)
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
            <Counter counter={counter} maxCountValue={maxCountValue}/>
            <div className={s.btnGroup}>
                <Button className={counter < maxCountValue ? s.btnActive : s.btnDisabled} title={'inc'}
                        callback={increment}/>
                <Button className={counter === initCountValue ? s.btnDisabled : s.btnActive} title={'reset'}
                        callback={reset}/>
                {/*<button onClick={setLocalStorageHandler}>SET to local storage</button>*/}
                {/*<button onClick={getLocalStorageHandler}>GET to local storage</button>*/}
                {/*<button onClick={clearLocalStorageHandler}>CLEAR to local storage</button>*/}
                {/*<button onClick={removeItemFromLocalStorageHandler}>Remove Item to local storage</button>*/}

            </div>
        </div>
    );
}

export default App;
