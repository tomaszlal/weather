import type { WeatherResponse } from "../types/ApiTypes";

export class ApiUtils {

    private static current = ["cloud_cover", "pressure_msl", "wind_direction_10m"];
    private static daily = ["sunrise", "sunset"];

    public static formatAndRound(num: number): string {
        if (typeof num !== 'number' || isNaN(num)) {
            return '0.0';
        }
        const roundedNumber = Math.round(num * 2) / 2;
        return roundedNumber.toFixed(1);
    }

    public static getAdditionalInfo(data: WeatherResponse) {

        const value = Object.entries(data.current).forEach(([key, value]) => {

            if (this.current.includes(key)) {
                console.log(`key : ${key} -> ${value}`);
            }
        });



        // [pressure_msl];
        console.log(value);


        // data.utcOffsetSeconds




        console.log(data.current.pressure_msl);
        return data.current.pressure_msl;
    }
}

export type kupaRows = {
    [code: number]: string;
};