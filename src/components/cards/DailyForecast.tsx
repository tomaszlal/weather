import { useSuspenseQuery } from "@tanstack/react-query"
import { Api } from "../../Api"
import Card from "./Card"

export default function DailyForecast() {

    const { data } = useSuspenseQuery({
        queryKey: ["weather"],
        queryFn: () => Api.getWeather({ lat: 50, lon: 20 })
    })

    return (
        <Card title="Hourly Rain">{JSON.stringify(data?.timezone)}</Card>
    )
}