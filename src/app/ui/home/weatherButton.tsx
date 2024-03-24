'use client'

// components/WeatherButton.js

import React, { useState } from 'react';
import axios from 'axios';

const WeatherButton = () => {
    const [weatherData, setWeatherData] = useState(null);

    const fetchWeatherData = async () => {
        try {
            const apiKey = process.env.API_KEY; // Ensure your API key is stored in .env.local
            const city = 'Vancouver'; // Example city
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

            const response = await axios.get(url);
            setWeatherData(response.data);
        } catch (error) {
            console.error('Failed to fetch weather data:', error);
            setWeatherData(null);
        }
    };

    return (
        <div>
            <button onClick={fetchWeatherData}>Get Weather</button>
            <div>
                {weatherData && (
                    <pre>{JSON.stringify(weatherData, null, 2)}</pre> // Displaying the raw JSON data for simplicity
                )}
            </div>
        </div>
    );
};

export default WeatherButton;
