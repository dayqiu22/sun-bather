'use client'
import { useState } from "react";
import Timepicker from "./timepicker";

export default function Schedule() {
    const [availability, setAvailability] = useState(Array(24).fill(false));
    const toggle = (hour:number) => {
        const updatedAvailability = availability.map((item, index) => index === hour ? !item : item);
        setAvailability(updatedAvailability);
        //update function??
    };
    
    return (
        <div>
            <h2>Select your available hours</h2>
            {availability.map((isAvailable, index) => <Timepicker key={index} hour={index} isAvailable={isAvailable} onToggle={() => toggle(index)}/>)}
        </div>
    );
}