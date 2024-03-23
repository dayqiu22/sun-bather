'use client'

import React, {useState} from 'react';

export default function Timepicker({ hour, onToggle, isAvailable }) {
    return (
       <div 
       onClick={() => onToggle(hour)}
       className={`${isAvailable ? 'available' : 'unavailable'}`}
       >
        <h2>{`${hour}:00`}</h2>
       </div>
    );
}