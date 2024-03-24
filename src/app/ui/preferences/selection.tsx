import { Radio, RadioGroup } from 'rsuite';
import { Input, InputGroup } from 'rsuite';
import { Preference } from '@/app/lib/definitions';
import React, { useState } from 'react';


export default function Selection() {
    const [tempMin, setTempMin] = React.useState(0);
    const [tempMax, setTempMax] = React.useState(25);
    const [sun, setSun] = React.useState<string>("no");
    const [wind, setWind] = React.useState("no");
    const [rain, setRain] = React.useState("no");


    return (
        <div>
            <div>
                Ideal Temperature
                <InputGroup>
                    <Input 
                        placeholder='Minimum Temperature'
                        id="temp_min"
                        defaultValue={0}
                        type="number"
                        value={tempMin}
                        onChange={value => setTempMin(parseFloat(value))}
                    />
                    <InputGroup.Addon>&deg;C</InputGroup.Addon>
                    <InputGroup.Addon>to</InputGroup.Addon>
                    <Input
                        placeholder='Maximum Temperature'
                        id="temp_max"
                        defaultValue={25}
                        type='number'
                        value={tempMax}
                        onChange={value => setTempMax(parseFloat(value))}/>
                    <InputGroup.Addon>&deg;C</InputGroup.Addon>
                </InputGroup>
            </div>
            
            <div>
                <RadioGroup id="sun" inline value={sun}>
                    <label>Sun Intensity</label>
                    <Radio value="no">Mild</Radio>
                    <Radio value="yes">Strong</Radio>
                </RadioGroup>
            </div>
            Windiness
            <div>
                <RadioGroup id="wind" inline defaultValue="no">
                    <Radio value="no">None</Radio>
                    <Radio value="yes">Breezy</Radio>
                </RadioGroup>
            </div>
            Rain OK?
            <div>
                <RadioGroup id="rain" inline defaultValue="no">
                    <Radio value="no">Absolutely Not</Radio>
                    <Radio value="yes">Tolerable</Radio>
                </RadioGroup>
            </div>
        </div>
    );
}