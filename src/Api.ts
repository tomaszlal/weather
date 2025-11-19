import { fetchWeatherApi } from "openmeteo";
import { type Coordinates, type WeatherResponse } from "./types/ApiTypes";

export class Api {

    public static async getWeather(coordinates: Coordinates) {

        const params = {
            latitude: coordinates.lat,
            longitude: coordinates.lon,
            daily: ["temperature_2m_max", "temperature_2m_min", "weather_code"],
            hourly: ["temperature_2m", "rain", "weather_code"],
            current: ["temperature_2m", "rain", "showers", "snowfall", "cloud_cover",
                "weather_code", "apparent_temperature", "relative_humidity_2m", "wind_speed_10m"],
            timezone: "auto",
            timeformat: "unixtime",
        };
        const url = "https://api.open-meteo.com/v1/forecast";
        const responses = await fetchWeatherApi(url, params);

        // Process first location. Add a for-loop for multiple locations or weather models
        const response = responses[0];

        // Attributes for timezone and location
        const latitude = response.latitude();
        const longitude = response.longitude();
        const elevation = response.elevation();
        const timezone = response.timezone();
        const timezoneAbbreviation = response.timezoneAbbreviation();
        const utcOffsetSeconds = response.utcOffsetSeconds();
        const hourly = response.hourly()!;
        const daily = response.daily()!;
        const current = response.current()!;

        // Note: The order of weather variables in the URL query and the indices below need to match!
        const weatherData: WeatherResponse = {
            latitude,
            longitude,
            timezone,
            elevation,
            utcOffsetSeconds,
            timezoneAbbreviation,
            hourly: {
                time: Array.from(
                    { length: (Number(hourly.timeEnd()) - Number(hourly.time())) / hourly.interval() },
                    (_, i) => new Date((Number(hourly.time()) + i * hourly.interval() + utcOffsetSeconds) * 1000)
                ),
                temperature_2m: hourly.variables(0)!.valuesArray(),
                rain: hourly.variables(1)!.valuesArray(),
                weather_code: hourly.variables(2)!.valuesArray(),
            },
            daily: {
                time: Array.from(
                    { length: (Number(daily.timeEnd()) - Number(daily.time())) / daily.interval() },
                    (_, i) => new Date((Number(daily.time()) + i * daily.interval() + utcOffsetSeconds) * 1000)
                ),
                temperature_2m_max: daily.variables(0)!.valuesArray(),
                temperature_2m_min: daily.variables(1)!.valuesArray(),
                weather_code: daily.variables(2)!.valuesArray(),
            },
            current: {
                time: new Date((Number(current.time()) + utcOffsetSeconds) * 1000),
                temperature_2m: current.variables(0)!.value(),
                rain: current.variables(1)!.value(),
                showers: current.variables(2)!.value(),
                snowfall: current.variables(3)!.value(),
                cloud_cover: current.variables(4)!.value(),
                weather_code: current.variables(5)!.value(),
                apparent_temperature: current.variables(6)!.value(),
                relative_humidity_2m: current.variables(7)!.value(),
                wind_speed_10m: current.variables(8)!.value(),
            },
        };

        return weatherData;
    }
}