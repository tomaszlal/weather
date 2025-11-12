import { useQuery } from "@tanstack/react-query"
import { Api } from "./Api"
import Card from "./components/cards/Card";
import DailyForecast from "./components/cards/DailyForecast";

function App() {

  const { data } = useQuery({
    queryKey: ["weather"],
    queryFn: () => Api.getWeather({ lat: 50, lon: 20 })
  })

  console.log(data);

  return (
    <div className="flex flex-col gap-8">
      <Card title="Current Weather">{JSON.stringify(data?.timezone)}</Card>
      <Card title="Hourly Forecast">{JSON.stringify(data?.timezone)}</Card>
      <DailyForecast />
    </div>
  )
}

export default App
