export type Preferences = {
    temp_min: number;
    temp_max: number;
    sun: string;
    wind: string;
    rain: string;
};

export type UserSettings = { temp_min: any; temp_max: any; sun: any; wind: any; rain: any; availability: any; }[]

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