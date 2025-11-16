import { WeatherIconNameMap } from "../types/ApiTypes";

type Props = {
  weatherCode: number;
}

export default function WeatherIcon({ weatherCode }: Props) {

  const src = WeatherIconNameMap[weatherCode];

  return (
    <img
      className="size-8"
      src={`/assets/${src}`}
      alt="wheater icon"
    />
  );
}