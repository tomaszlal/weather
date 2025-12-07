import DailyForecast from "./components/cards/DailyForecast";
import HourlyForecast from "./components/cards/HourlyForecast";
import CurrentWeather from "./components/cards/CurrentWeather";
import AdditionalInfo from "./components/cards/AdditionalInfo";
import { Map } from "./components/maps/Map";
import { useState } from "react";
import type { Coordinates } from "./types/ApiTypes";

function App() {
  // const { data } = useQuery({
  //   queryKey: ["weather"],
  //   queryFn: () => Api.getWeather({ lat: 50, lon: 20 }),
  // });

  // console.log(data);

  const [coordinates, setCoordinates] = useState<Coordinates>({
    lat: 50,
    lon: 21,
  });

  const onMapClick = (lat: number, lon: number) => {
    setCoordinates({lat, lon })
  }
  
  return (
    <div className="flex flex-col gap-8">
      <Map coordinates={coordinates} onMapClick={onMapClick}/>
      <CurrentWeather coordinates={coordinates} />
      <HourlyForecast coordinates={coordinates} />
      <DailyForecast coordinates={coordinates} />
      <AdditionalInfo coordinates={coordinates} />
    </div>
  );
}

export default App;
