import Card from "./Card"
import { useSuspenseQuery } from "@tanstack/react-query"
import { Api } from "../../Api"
import WeatherIcon from "../WeatherIcon"
import { Utils } from "../../utils/Utils"

export default function HourlyForecast() {

    const { data } = useSuspenseQuery({
        queryKey: ["weather"],
        queryFn: () => Api.getWeather({ lat: 50, lon: 20 })
    })

    return (
        <Card title="Hourly Forecast" childrenClassName="flex gap-6 overflow-x-scroll">
            {data?.hourly.time.map((hour, index) => (
                <div className="flex flex-col gap2 items-center p-2">
                    <p className="whitespace-nowrap">{hour.toLocaleTimeString(undefined, {
                        hour:"numeric",
                        minute:"2-digit"
                    })}</p>
                    <WeatherIcon weatherCode={data?.hourly.weather_code?.at(index) || 0} />
                    <p className="whitespace-nowrap">{Utils.formatAndRound(data?.hourly.temperature_2m?.at(index) || 0)}°C</p>
                </div>
            ))}
        </Card>
    )
}