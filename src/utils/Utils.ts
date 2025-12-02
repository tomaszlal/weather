import type { AdditionalRow } from "../types/ApiTypes";
import { weatherNames, type WeatherKey } from "../types/Types";

export class Utils {

    private static directions: string[] = [
        "N",  // 0°
        "NE", // 45°
        "E",  // 90°
        "SE", // 135°
        "S",  // 180°
        "SW", // 225°
        "W",  // 270°
        "NW"  // 315°
    ];

    public static additionalNames: Map<WeatherKey, string> = new Map(
        Object.entries(weatherNames) as [WeatherKey, string][]
    );

    public static getWindDirection(data: AdditionalRow): string {
        if (data.label === "wind_direction_10m") {
            return this.getMajorWindDirection(data.value);
        }
        return "";
    }

    private static getMajorWindDirection(degrees: number): string {
        const normalizedDegrees = (degrees % 360 + 360) % 360;
        const sectorSize = 360 / this.directions.length; // 45
        const index = Math.floor((normalizedDegrees + sectorSize / 2) / sectorSize) % this.directions.length;
        return this.directions[index];
    }
}