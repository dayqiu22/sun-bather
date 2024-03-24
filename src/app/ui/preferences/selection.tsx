import { Button, Radio, RadioGroup } from 'rsuite';
import { Input, InputGroup, Col } from 'rsuite';
import React, { useState } from 'react';
import { savePreferences } from '@/app/lib/actions';
import { Preferences } from '@/app/lib/definitions';

export default function Selection() {
    const [tempMin, setTempMin] = useState<number>(0);
    const [tempMax, setTempMax] = useState<number>(25);
    const [sun, setSun] = useState<string>("no");
    const [wind, setWind] = useState<string>("no");
    const [rain, setRain] = useState<string>("no");

    const pref: Preferences = {
        temp_min: tempMin,
        temp_max: tempMax,
        sun: sun,
        wind: wind,
        rain: rain
    }

    return (
        <Col className={'inputContainer'}>
            <label htmlFor="temp">
                Ideal Temperature
            </label>
            <div id="temp">
                <label style={{ fontSize: '20px' }}>From:</label>
                <InputGroup style={{ marginBottom: '10px' }}>
                    <Input 
                        placeholder='Minimum Temperature'
                        id="temp_min"
                        type="number"
                        value={tempMin}
                        onChange={value => setTempMin(parseFloat(value))}
                        style={{ fontSize: '14px' }} // Set input font size
                    />
                    <InputGroup.Addon>&deg;C</InputGroup.Addon>
                </InputGroup>
                
                <label style={{ fontSize: '20px' }}>To:</label>
                <InputGroup style={{ marginBottom: '10px' }}>
                    <Input 
                        placeholder='Maximum Temperature'
                        id="temp_max"
                        type='number'
                        value={tempMax}
                        onChange={value => setTempMax(parseFloat(value))}
                        style={{ fontSize: '14px' }} // Set input font size
                    />
                    <InputGroup.Addon>&deg;C</InputGroup.Addon>
                </InputGroup>
            </div>
            <br/>
            <label htmlFor="sun">
                Sun Intensity
            </label>
            <div>
                <RadioGroup id="sun" inline value={sun} onChange={(value, event) => setSun(value.toString())}>
                    <Radio value="no">Mild</Radio>
                    <Radio value="yes">Strong</Radio>
                </RadioGroup>
            </div>
            <br/>
            <label htmlFor="wind">
                Windiness
            </label>
            <div>
                <RadioGroup id="wind" inline value={wind} onChange={(value, event) => setWind(value.toString())}>
                    <Radio value="no">None</Radio>
                    <Radio value="yes">Breezy</Radio>
                </RadioGroup>
            </div>
            <br/>
            <label htmlFor="rain">
                Rain OK?
            </label>
            <div>
                <RadioGroup id="rain" inline value={rain} onChange={(value, event) => setRain(value.toString())}>
                    <Radio value="no">Absolutely Not</Radio>
                    <Radio value="yes">Tolerable</Radio>
                </RadioGroup>
            </div>
            <br/>
            <Button onClick={async () => savePreferences(pref)}>Save</Button>
        </Col>
    );
}
