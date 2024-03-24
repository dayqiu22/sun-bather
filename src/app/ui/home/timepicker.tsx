'use client'

import React, {useState} from 'react';

interface TimepickerProps {
    hour: number;
    onToggle: (hour: number) => void;
    isAvailable: boolean;
};

export default function Timepicker({ hour, onToggle, isAvailable }: TimepickerProps) {
    return (
       <div 
       onClick={() => onToggle(hour)}
       className={`${isAvailable ? 'available' : 'unavailable'}`}
       >
        <h2>{`${hour}:00`}</h2>
       </div>
    );
};