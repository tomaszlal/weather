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

        const additionalInfo : Map<string, number> = new Map();

        Object.entries(data.current).forEach(([key, value]) => {
            if (this.current.includes(key)) {
                additionalInfo.set(key,value);
                console.log(`key : ${key} -> ${value}`);
            }
        });
        

        Object.entries(data.daily).forEach(([key, value]) => {
  
            if (this.daily.includes(key)) {
                // additionalInfo.set(key,value);
                console.log(`key : ${key} -> ${value[0]}`);
            }
        });


        // this.daily.forEach((key) => {
           
        // })

        // data.daily.sunrise[0].getDate()

        console.log(additionalInfo);
        return data.current.pressure_msl;
    }
}

export type kupaRows = {
    [code: number]: string;
};