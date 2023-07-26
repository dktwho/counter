import React from 'react';
import s from "../App.module.css";

type CounterPropsTypre = {
    counter: number
    maxCountValue: number

}
export const Counter = ({counter, maxCountValue,}: CounterPropsTypre) => {
    return (
        <div className={counter < maxCountValue ? s.counter : s.counterDisabled}>{counter}</div>
    );
};

