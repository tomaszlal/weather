export type Coordinates = {
    lat: number;
    lon: number;
}

export interface HourlyData {
    time: Date[];
    temperature_2m: Float32Array<ArrayBufferLike> | null;
    rain: Float32Array<ArrayBufferLike> | null;
    weather_code: Float32Array<ArrayBufferLike> | null;
}

export interface CurrentData {
    time: Date;
    temperature_2m: number | null;
    rain: number | null;
    showers: number | null;
    snowfall: number | null;
    cloud_cover: number | null;
    weather_code: number | null;
    apparent_temperature: number | null;
    relative_humidity_2m: number | null;
    wind_speed_10m: number | null;
}

export interface DailyData {
    time: Date[];
    temperature_2m_max: Float32Array<ArrayBufferLike> | null;
    temperature_2m_min: Float32Array<ArrayBufferLike> | null;
    weather_code: Float32Array<ArrayBufferLike> | null;
}

export interface WeatherResponse {
    latitude: number;
    longitude: number;
    timezone: string | null;
    elevation: number;
    utcOffsetSeconds: number;
    timezoneAbbreviation: string | null;
    hourly: HourlyData;
    daily: DailyData;
    current: CurrentData;
}

export type WeatherName = {
    [code: number]: string;
};

export const WeatherIconNameMap: WeatherName = {
    0: "01d.png", //'Clear sky',
    1: "02d.png", //'Mainly clear, partly cloudy, and overcast',
    2: "03d.png", //'Mainly clear, partly cloudy, and overcast',
    3: "04d.png", //'Mainly clear, partly cloudy, and overcast',
    45: "50d.png",//'Fog and depositing rime fog',
    48: "50d.png",//'Fog and depositing rime fog',
    51: "10d.png",//'Drizzle: Light, moderate, and dense intensity',
    53: "10d.png",//'Drizzle: Light, moderate, and dense intensity',
    55: "10d.png",//'Drizzle: Light, moderate, and dense intensity',
    56: "10d.png",//'Freezing Drizzle: Light and dense intensity',
    57: "10d.png",//'Freezing Drizzle: Light and dense intensity',
    61: "09d.png",//'Rain: Slight, moderate and heavy intensity',
    63: "09d.png",//'Rain: Slight, moderate and heavy intensity',
    65: "09d.png",//'Rain: Slight, moderate and heavy intensity',
    66: "09d.png",//'Freezing Rain: Light and heavy intensity',
    67: "09d.png",//'Freezing Rain: Light and heavy intensity',
    71: "13d.png",//'Snow fall: Slight, moderate, and heavy intensity',
    73: "13d.png",//'Snow fall: Slight, moderate, and heavy intensity',
    75: "13d.png",//'Snow fall: Slight, moderate, and heavy intensity',
    77: "13d.png",//'Snow grains',
    80: "10d.png",//'Rain showers: Slight, moderate, and violent',
    81: "10d.png",//'Rain showers: Slight, moderate, and violent',
    82: "10d.png",//'Rain showers: Slight, moderate, and violent',
    85: "13d.png",//'Snow showers slight and heavy',
    86: "13d.png",//'Snow showers slight and heavy',
    95: "11d.png",//'Thunderstorm: Slight or moderate',
    96: "11d.png",//'Thunderstorm with slight and heavy hail',
    99: "11d.png",//'Thunderstorm with slight and heavy hail',
};
export const WeatherNameMap: WeatherName = {
    0: 'Clear sky',
    1: 'Mainly clear, partly cloudy, and overcast',
    2: 'Mainly clear, partly cloudy, and overcast',
    3: 'Mainly clear, partly cloudy, and overcast',
    45: 'Fog and depositing rime fog',
    48: 'Fog and depositing rime fog',
    51: 'Drizzle: Light, moderate, and dense intensity',
    53: 'Drizzle: Light, moderate, and dense intensity',
    55: 'Drizzle: Light, moderate, and dense intensity',
    56: 'Freezing Drizzle: Light and dense intensity',
    57: 'Freezing Drizzle: Light and dense intensity',
    61: 'Rain: Slight, moderate and heavy intensity',
    63: 'Rain: Slight, moderate and heavy intensity',
    65: 'Rain: Slight, moderate and heavy intensity',
    66: 'Freezing Rain: Light and heavy intensity',
    67: 'Freezing Rain: Light and heavy intensity',
    71: 'Snow fall: Slight, moderate, and heavy intensity',
    73: 'Snow fall: Slight, moderate, and heavy intensity',
    75: 'Snow fall: Slight, moderate, and heavy intensity',
    77: 'Snow grains',
    80: 'Rain showers: Slight, moderate, and violent',
    81: 'Rain showers: Slight, moderate, and violent',
    82: 'Rain showers: Slight, moderate, and violent',
    85: 'Snow showers slight and heavy',
    86: 'Snow showers slight and heavy',
    95: 'Thunderstorm: Slight or moderate',
    96: 'Thunderstorm with slight and heavy hail',
    99: 'Thunderstorm with slight and heavy hail',
};