export type Preferences = {
    temp_min: number;
    temp_max: number;
    sun: string;
    wind: string;
    rain: string;
};

export type UserSettings = {
    temp_min: number;
    temp_max: number;
    sun: string;
    wind: string;
    rain: string;
    availability: any;
};

export type WeatherData = {
    timeSpan: string,
    cloudCover: string,
    temperature: string,
    wind: string
};

export type RawWeatherData = {
    time: number,
    cloudCover: number,
    temperature: number,
    wind: number
};