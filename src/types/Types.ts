export const weatherNames = {
    "cloud_cover": "Cloud cover %",
    "pressure_msl": "Pressure hPa",
    "wind_direction_10m": "Wind direction",
    "sunrise": "Sunrise",
    "sunset": "Sunset"
};

export type WeatherKey = keyof typeof weatherNames;