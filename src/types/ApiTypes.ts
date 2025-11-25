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
    is_day: number | null;
    pressure_msl: number | null;
    wind_direction_10m: number | null;
}

export interface DailyData {
    time: Date[];
    temperature_2m_max: Float32Array<ArrayBufferLike> | null;
    temperature_2m_min: Float32Array<ArrayBufferLike> | null;
    weather_code: Float32Array<ArrayBufferLike> | null;
    sunrise: Array<Date> | null;
    sunset: Array<Date> | null;
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

export type AdditionalRow = {
    label: string;
    value: number;
}