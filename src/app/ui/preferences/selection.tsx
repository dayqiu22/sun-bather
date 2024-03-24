import { Radio, RadioGroup } from 'rsuite';
import { Input, InputGroup, Col } from 'rsuite';

export default function Selection() {
    return (
        <Col>
            <div>
                Ideal Temperature
                <InputGroup>
                    <Input />
                    <InputGroup.Addon>&deg;C</InputGroup.Addon>
                    <InputGroup.Addon>to</InputGroup.Addon>
                    <Input />
                    <InputGroup.Addon>&deg;C</InputGroup.Addon>
                </InputGroup>
            </div>
            Sun Intensity
            <div>
                <RadioGroup name="sun" inline defaultValue="no">
                    <Radio value="no">Mild</Radio>
                    <Radio value="yes">Strong</Radio>
                </RadioGroup>
            </div>
            Windiness
            <div>
                <RadioGroup name="wind" inline defaultValue="no">
                    <Radio value="no">None</Radio>
                    <Radio value="yes">Breezy</Radio>
                </RadioGroup>
            </div>
            Rain OK?
            <div>
                <RadioGroup name="rain" inline defaultValue="no">
                    <Radio value="no">Absolutely Not</Radio>
                    <Radio value="yes">Tolerable</Radio>
                </RadioGroup>
            </div>
        </Col>
    );
}