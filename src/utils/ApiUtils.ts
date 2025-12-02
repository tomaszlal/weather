import type { AdditionalRow, WeatherResponse } from "../types/ApiTypes";

export class ApiUtils {

    private static current = ["cloud_cover", "pressure_msl", "wind_direction_10m"];
    private static daily = ["sunrise", "sunset"];

    public static formatAndRoundToHalf(num: number): string {
        if (typeof num !== 'number' || isNaN(num)) {
            return '0.0';
        }
        const roundedNumber = Math.round(num * 2) / 2;
        return roundedNumber.toFixed(1);
    }

    public static getAdditionalInfo(data: WeatherResponse): Map<string, number> {
        const additionalInfo: Map<string, number> = new Map();
        Object.entries(data.current).forEach(([key, value]) => {
            if (this.current.includes(key)) {
                additionalInfo.set(key, Math.floor(value));
            }
        });
        Object.entries(data.daily).forEach(([key, value]) => {
            if (this.daily.includes(key)) {
                additionalInfo.set(key, (value[0] as Date).valueOf());
            }
        });
        return additionalInfo;
    }

    public static formatComponent(data: AdditionalRow): number | string {
        if (this.daily.includes(data.label)) {
            return new Date(data.value).toLocaleTimeString("pl-PL", {
                hour: "numeric",
                minute: "2-digit",
            });
        }
        return data.value;
    }
}