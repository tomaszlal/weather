import { useQuery } from "@tanstack/react-query"
import { Api } from "./Api"

function App() {

  const { data } = useQuery({
    queryKey: ["weather"],
    queryFn: () => Api.getWeather({ lat: 50, lon: 20 })
  })

  const kupa = JSON.stringify(data);
  console.log(data);

  return (
    <>{kupa}</>
  )
}

export default App
