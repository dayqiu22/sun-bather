import { Radio, RadioGroup } from 'rsuite';
import { Input, InputGroup, Col } from 'rsuite';
import { Preference } from '@/app/lib/definitions';
import React, { useState } from 'react';
import styles from "./page.module.css";

export default function Selection() {
    const [tempMin, setTempMin] = useState(0);
    const [tempMax, setTempMax] = useState(25);
    const [sun, setSun] = useState<string>("no");
    const [wind, setWind] = useState("no");
    const [rain, setRain] = useState("no");

    return (
        <Col className={'inputContainer'}>
            <div>
                <label>Ideal Temperature</label>
                <InputGroup className = {'pref'}>
                    <Input 
                        placeholder='Minimum Temperature'
                        id="temp_min"
                        defaultValue={0}
                        type="number"
                        value={tempMin}
                        onChange={value => setTempMin(parseFloat(value))}
                        //className={'pref'}
                    />
                    <InputGroup.Addon>&deg;C</InputGroup.Addon>
                    <InputGroup.Addon>to</InputGroup.Addon>
                    <Input
                        placeholder='Maximum Temperature'
                        id="temp_max"
                        defaultValue={25}
                        type='number'
                        value={tempMax}
                        onChange={value => setTempMax(parseFloat(value))}
                        //className={'pref'}
                    />
                    <InputGroup.Addon>&deg;C</InputGroup.Addon>
                </InputGroup>
            </div>
            
            <div>
                <label>Sun Intensity</label>
                <RadioGroup id="sun" inline value={sun}>
                    <Radio value="no" className={'pref'}>Mild</Radio>
                    <Radio value="yes" className={'pref'}>Strong</Radio>
                </RadioGroup>
            </div>
            
            <div>
                <label>Windiness</label>
                <RadioGroup id="wind" inline defaultValue="no">
                    <Radio value="no" className={'pref'}>None</Radio>
                    <Radio value="yes" className={'pref'}>Breezy</Radio>
                </RadioGroup>
            </div>
            
            <div>
                <label>Rain OK?</label>
                <RadioGroup id="rain" inline defaultValue="no">
                    <Radio value="no" className={'pref'}>Absolutely Not</Radio>
                    <Radio value="yes" className={'pref'}>Tolerable</Radio>
                </RadioGroup>
            </div>
        </Col>
    );
}
