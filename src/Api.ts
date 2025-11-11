import { fetchWeatherApi } from "openmeteo";
// import { type Coordinates } from "./types/ApiTypes";

export class Api {

    public static async getWeather() { //: Promise<unknown>   coordinates: Coordinates



        const params = {
            latitude: 52.2298,
            longitude: 21.0118,
            hourly: ["temperature_2m", "rain"],
            timezone: "auto",
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

        console.log(
            `\nCoordinates: ${latitude}°N ${longitude}°E`,
            `\nElevation: ${elevation}m asl`,
            `\nTimezone: ${timezone} ${timezoneAbbreviation}`,
            `\nTimezone difference to GMT+0: ${utcOffsetSeconds}s`,
        );

        const hourly = response.hourly()!;

        // Note: The order of weather variables in the URL query and the indices below need to match!
        const weatherData = {
            hourly: {
                time: Array.from(
                    { length: (Number(hourly.timeEnd()) - Number(hourly.time())) / hourly.interval() },
                    (_, i) => new Date((Number(hourly.time()) + i * hourly.interval() + utcOffsetSeconds) * 1000)
                ),
                temperature_2m: hourly.variables(0)!.valuesArray(),
                rain: hourly.variables(1)!.valuesArray(),
            },
        };

        // The 'weatherData' object now contains a simple structure, with arrays of datetimes and weather information
        console.log("\nHourly data:\n", weatherData.hourly)
    }
}