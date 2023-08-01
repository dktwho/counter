import React, {ChangeEvent} from 'react';
import s from "../App.module.css";
import {Button} from "./Button";


type SettingType = {
    startValue: number
    maxValue: number
    onChangeStartValue: (e: ChangeEvent<HTMLInputElement>) => void
    onChangeMaxValue: (e: ChangeEvent<HTMLInputElement>) => void
    appSet: () => void
}
export const CounterSettings = ({startValue, maxValue, onChangeStartValue, onChangeMaxValue, appSet}: SettingType) => {
    return (
        <div className={s.counterSettings}>
            <div>
                <h3>max value:</h3><input value={maxValue} onChange={onChangeMaxValue} className={s.inputSettings}
                                          type="number"/>
                <h3>start value:</h3><input value={startValue} onChange={onChangeStartValue}
                                            className={startValue >= 0 ? s.inputSettings : s.inputError}
                                            type="number"/>
            </div>

            <div>
                <Button title={'set'} callback={appSet}/>
            </div>

        </div>
    );
};