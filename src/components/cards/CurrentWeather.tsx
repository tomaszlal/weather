import { useSuspenseQuery } from "@tanstack/react-query"
import { Api } from "../../Api"
import Card from "./Card"
import { ApiUtils } from "../../utils/ApiUtils"
import WeatherIcon from "../icons/WeatherIcon"
import { WeatherNameMap } from "../../types/IconTypes"

export default function CurrentWeather() {

    const { data } = useSuspenseQuery({
        queryKey: ["weather"],
        queryFn: () => Api.getWeather({ lat: 50, lon: 20 })
    })

    return (
        <Card title="Current weather" childrenClassName="flex flex-col items-center gap-6">
            <h2 className="text-6xl font-semibold text-center">
                {ApiUtils.formatAndRoundToHalf(data?.current.temperature_2m as number)}°C
            </h2>
            <WeatherIcon
                weatherCode={data?.current.weather_code || 0}
                className="size-44"
            />
            <h3 className="capitalize text-xl"> {WeatherNameMap[data?.current.weather_code || 0]}</h3>

            <div className="flex flex-col gap-2">
                <p className="text-xl text-center">Local time:</p>
                <h3 className="text-4xl font-semibold">{new Intl.DateTimeFormat('pl-PL', {
                    hour: "2-digit",
                    minute: "2-digit",
                    timeZone: data.timezone || ""
                }).format(data.current.time)}</h3>
            </div>
            <div className="flex justify-between w-full">
                <div className="flex flex-col items-center gap-2">
                    <p className="text-gray-500">Feels like</p>
                    <p>{ApiUtils.formatAndRoundToHalf(data?.current.apparent_temperature || 0)}°C</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <p className="text-gray-500">Humidity</p>
                    <p>{data?.current.relative_humidity_2m}%</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <p className="text-gray-500">Wind</p>
                    <p>{ApiUtils.formatAndRoundToHalf(data?.current.wind_speed_10m || 0)}km/h</p>
                </div>
            </div>
        </Card>
    )
}