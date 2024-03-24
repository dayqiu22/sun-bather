'use client'

// components/WeatherButton.js

require('dotenv').config();

import React, { useState } from 'react';
import axios from 'axios';

const WeatherButton = () => {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);

    const fetchWeatherData = async () => {
        const apiKey = process.env.NEXT_PUBLIC_API_KEY; 

        try {
            // First, get the latitude and longitude for the city
            const geoUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${city},CA&limit=1&appid=${apiKey}`;
            const geoResponse = await axios.get(geoUrl);
            const { lat, lon } = geoResponse.data[0];

            // Then, use lat and lon to fetch the weather data
            const weatherUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`;
            const weatherResponse = await axios.get(weatherUrl);
            setWeatherData(weatherResponse.data);
        } catch (error) {
            console.error('Failed to fetch weather data:', error);
            setWeatherData(null);
        }
    };

    return (
        <div>
            <input 
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Enter City"
            />
            <button onClick={fetchWeatherData}>Get Weather</button>
            <div>
                {weatherData && (
                    <pre>{JSON.stringify(weatherData, null, 2)}</pre>
                )}
            </div>
        </div>
    );
};

export default WeatherButton;
