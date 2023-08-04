import React from 'react';
import s from "../App.module.css";

type CounterPropsType = {
    counter: number
    maxCountValue: number
    startValue: number


}
export const Counter = ({counter, maxCountValue, startValue}: CounterPropsType) => {
    return (
        // <div className={counter < maxCountValue  ? s.counter : s.counterDisabled}>{counter}</div>
        <div className={counter < maxCountValue  ? s.counter : s.counterDisabled}>{startValue < 0 ? 'Incorrect value' : counter}</div>
    );
};

