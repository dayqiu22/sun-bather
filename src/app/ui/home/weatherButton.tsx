'use client'

// components/WeatherButton.js

require('dotenv').config();

import React, { useState } from 'react';
import axios from 'axios';
import Reco from './reco';
import { UserSettings } from '@/app/lib/definitions';

interface UserProps {
    user: UserSettings
};

const WeatherButton = ({ user }: UserProps) => {
    const [city, setCity] = useState('Vancouver');
    const [weatherData, setWeatherData] = useState<any>(null);
    const [sun, setSun] = useState<string | null>(null);
    const [wind, setWind] = useState<string | null>(null);
    const [temp, setTemp] = useState<number | null>(null);
    const [time, setTime] = useState<string | null>(null);

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

    const getBest = async () => {
        if (!weatherData) {return;}
        else {    
            for (let i = 0; i < 3; i++) {
                // still need to implement avaialbility matching
                let dateTime = weatherData.list[i].dt_txt;
                let temp = weatherData.list[i].main.temp;
                let cloud = weatherData.list[i].clouds.all;
                let wnspd = weatherData.list[i].wind.speed;
                let rainfall = weatherData.list[i].weather[0].main;
                const date = new Date(dateTime.replace(" ", "T") + "Z");
                const localTime = date.toLocaleTimeString();

                console.log(temp);
                console.log(cloud);
                console.log(wnspd);
                console.log(rainfall);
                console.log(user[0].temp_min);
                console.log(user[0].temp_max);
                console.log(user[0].sun);
                console.log(user[0].wind);
                console.log(user[0].rain);
                if (temp-273.15 >= user[0].temp_min && temp-273.15 <= user[0].temp_max) {
                    if (user[0].sun == 'no' && cloud < 25) {
                        continue;
                    }
                    if (user[0].wind == 'no' && wnspd > 10) {
                        continue;
                    }
                    if (user[0].rain == 'no' && rainfall == 'heavy intensity rain') {
                        continue;
                    }
                    cloud = (cloud < 25) ? 'Clear' : 'Cloudy';
                    wnspd = (wnspd > 10) ? 'Windy' : 'Calm';
                    temp = temp - 273.15;
                    setSun(cloud);
                    setWind(wnspd);
                    setTemp(temp.toFixed(2));
                    setTime(localTime);
                    console.log(sun);
                    console.log(wind);
                    console.log(temp);
                }
            }
        }
    };

    return (
        <>
            <Reco time = {time} sun={sun} wind={wind} temp={temp} user={user}/>
            <div>
                <input 
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Enter City"
                />
                <button onClick={fetchWeatherData}>Get Weather</button>
                <button onClick={getBest}>Refresh</button>
                <div>
                    {weatherData && (
                        <pre>{JSON.stringify(weatherData, null, 2)}</pre>
                    )}
                </div>
            </div>
        </>
    );
};

export default WeatherButton;
