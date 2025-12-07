import Card from "./Card";
import { useSuspenseQuery } from "@tanstack/react-query";
import { Api } from "../../Api";
import WeatherIcon from "../icons/WeatherIcon";
import { ApiUtils } from "../../utils/ApiUtils";
import type { Coordinates } from "../../types/ApiTypes";

type Props = {
  coordinates: Coordinates;
};

export default function HourlyForecast({ coordinates }: Props) {
  const { data } = useSuspenseQuery({
    queryKey: ["weather", coordinates],
    queryFn: () => Api.getWeather({ lat: coordinates.lat, lon: coordinates.lon }),
  });

  return (
    <Card
      title="Hourly Forecast"
      childrenClassName="flex gap-6 overflow-x-scroll"
    >
      {data?.hourly.time.map((hour, index) => (
        <div className="flex flex-col gap2 items-center p-2">
          <p className="whitespace-nowrap">
            {hour.toLocaleTimeString(undefined, {
              hour: "numeric",
              minute: "2-digit",
            })}
          </p>
          <WeatherIcon
            weatherCode={data?.hourly.weather_code?.at(index) || 0}
          />
          <p className="whitespace-nowrap">
            {ApiUtils.formatAndRoundToHalf(
              data?.hourly.temperature_2m?.at(index) || 0
            )}
            °C
          </p>
        </div>
      ))}
    </Card>
  );
}
