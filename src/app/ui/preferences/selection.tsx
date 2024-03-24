import { Button, Radio, RadioGroup } from 'rsuite';
import { Input, InputGroup, Col } from 'rsuite';
import { Preference } from '@/app/lib/definitions';
import React, { useState } from 'react';


export default function Selection() {
    const [tempMin, setTempMin] = React.useState<number>(0);
    const [tempMax, setTempMax] = React.useState<number>(25);
    const [sun, setSun] = React.useState<string>("no");
    const [wind, setWind] = React.useState<string>("no");
    const [rain, setRain] = React.useState<string>("no");

    return (
        <Col>
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
            <br/>
            Sun Intensity
            <div>
                <RadioGroup id="sun" inline value={sun} onChange={(value, event) => setSun(value.toString())}>
                    <Radio defaultChecked value="no">Mild</Radio>
                    <Radio value="yes">Strong</Radio>
                </RadioGroup>
            </div>
            <br/>
            Windiness
            <div>
                <RadioGroup id="wind" inline value={wind} onChange={(value, event) => setWind(value.toString())}>
                    <Radio defaultChecked value="no">None</Radio>
                    <Radio value="yes">Breezy</Radio>
                </RadioGroup>
            </div>
            <br/>
            Rain OK?
            <div>
                <RadioGroup id="rain" inline value={rain} onChange={(value, event) => setRain(value.toString())}>
                    <Radio defaultChecked value="no">Absolutely Not</Radio>
                    <Radio value="yes">Tolerable</Radio>
                </RadioGroup>
            </div>
            <br/>
        </Col>
    );
}