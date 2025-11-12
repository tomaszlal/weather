export type Coordinates = {
    lat: number;
    lon: number;
}

export interface HourlyData {
    /** Array of ISO 8601 timestamps for each data point (e.g., "2025-11-11T00:00:00.000Z"). */
    time: Date[];
    
    /** Temperature at 2 meters, mapped by hourly index. */
    temperature_2m: Float32Array<ArrayBufferLike> | null;
    
    /** Rain volume, mapped by hourly index. */
    rain: Float32Array<ArrayBufferLike> | null;
}

/**
 * The main interface for the complete weather API response.
 */
export interface WeatherResponse {
    /** The geographical latitude of the forecast point. */
    latitude: number;
    /** The geographical longitude of the forecast point. */
    longitude: number;
    /** The timezone name (e.g., "Europe/Warsaw"). */
    timezone: string | null;
    /** The elevation above sea level in meters. */
    elevation: number;
    /** The offset from UTC in seconds. */
    utcOffsetSeconds: number;
    /** The abbreviated timezone name (e.g., "GMT+1"). */
    timezoneAbbreviation: string | null;
    /** Detailed hourly time-series data. */
    hourly: HourlyData;
}