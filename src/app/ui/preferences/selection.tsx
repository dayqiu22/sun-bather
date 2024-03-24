import { Radio, RadioGroup } from 'rsuite';
import { Input, InputGroup, Col } from 'rsuite';
import { Preference } from '@/app/lib/definitions';
import React, { useState } from 'react';

export default function Selection() {
    const [tempMin, setTempMin] = useState(0);
    const [tempMax, setTempMax] = useState(25);
    const [sun, setSun] = useState<string>("no");
    const [wind, setWind] = useState("no");
    const [rain, setRain] = useState("no");

    const labelStyle = {
        marginRight: '10px', // Add margin between label and input group
        fontSize: '18px',   // Set label font size
        fontWeight: 'bold', // Optionally set font weight
    };

    const inputGroupStyle = {
        display: 'flex',
        alignItems: 'center',
    };

    const rowStyle = {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '10px', // Add margin between rows
    };

    return (
        <Col className={'inputContainer'}>
            <div style={rowStyle}>
                <label style={labelStyle}>Ideal Temperature</label>
                <div style={inputGroupStyle}>
                    <Input 
                        placeholder='Minimum Temperature'
                        id="temp_min"
                        defaultValue={0}
                        type="number"
                        value={tempMin}
                        onChange={value => setTempMin(parseFloat(value))}
                        style={{ fontSize: '14px' }} // Set input font size
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
                        style={{ fontSize: '14px' }} // Set input font size
                    />
                    <InputGroup.Addon>&deg;C</InputGroup.Addon>
                </div>
            </div>
            
            <div style={rowStyle}>
                <label style={labelStyle}>Sun Intensity</label>
                <RadioGroup id="sun" inline value={sun}>
                    <Radio value="no">Mild</Radio>
                    <Radio value="yes">Strong</Radio>
                </RadioGroup>
            </div>
            
            <div style={rowStyle}>
                <label style={labelStyle}>Windiness</label>
                <RadioGroup id="wind" inline defaultValue="no">
                    <Radio value="no">None</Radio>
                    <Radio value="yes">Breezy</Radio>
                </RadioGroup>
            </div>
            
            <div style={rowStyle}>
                <label style={labelStyle}>Rain OK?</label>
                <RadioGroup id="rain" inline defaultValue="no">
                    <Radio value="no">Absolutely Not</Radio>
                    <Radio value="yes">Tolerable</Radio>
                </RadioGroup>
            </div>
        </Col>
    );
}
