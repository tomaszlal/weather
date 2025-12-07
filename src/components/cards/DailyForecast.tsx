import { useSuspenseQuery } from "@tanstack/react-query";
import { Api } from "../../Api";
import Card from "./Card";
import { ApiUtils } from "../../utils/ApiUtils";
import WeatherIcon from "../icons/WeatherIcon";
import type { Coordinates } from "../../types/ApiTypes";

type Props = {
  coordinates: Coordinates;
};

export default function DailyForecast({ coordinates }: Props) {
  const { data } = useSuspenseQuery({
    queryKey: ["weather", coordinates],
    queryFn: () => Api.getWeather({ lat: coordinates.lat, lon: coordinates.lon }),
  });

  // {`https://openweathermap.org/img/wn/10d.png`}
  return (
    <Card title="Daily Forecast" childrenClassName="flex flex-col gap-4">
      {data?.daily.time.map((day, index) => (
        <div className="flex justify-between">
          <p className="w-35">
            {day.toLocaleDateString(undefined, {
              weekday: "short",
              year: "numeric",
              month: "short",
              day: "2-digit",
            })}
          </p>
          <WeatherIcon weatherCode={data?.daily.weather_code?.at(index) || 0} />
          <p>
            {ApiUtils.formatAndRoundToHalf(
              data?.daily.temperature_2m_max?.at(index) || 0
            )}
            °C
          </p>
          <p>
            {ApiUtils.formatAndRoundToHalf(
              data?.daily.temperature_2m_min?.at(index) || 0
            )}
            °C
          </p>
        </div>
      ))}
    </Card>
  );
}
