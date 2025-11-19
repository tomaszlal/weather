import { useQuery } from "@tanstack/react-query"
import { Api } from "./Api"
import DailyForecast from "./components/cards/DailyForecast";
import HourlyForecast from './components/cards/HourlyForecast';
import CurrentWeather from "./components/cards/CurrentWeather";

function App() {

  const { data } = useQuery({
    queryKey: ["weather"],
    queryFn: () => Api.getWeather({ lat: 50, lon: 20 })
  })

  console.log(data);

  return (
    <div className="flex flex-col gap-8">
      <CurrentWeather />
      <HourlyForecast />
      <DailyForecast />
    </div>
  )
}

export default App