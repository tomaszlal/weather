// import { useQuery } from "@tanstack/react-query"
import { Api } from "./Api"

function App() {

  // const { data } = useQuery({
  //   queryKey: ["weather"],
  //   queryFn: () => Api.getWeather({ lat: 50, lon: 50 })
  // })

  Api.getWeather(); //{ lat: 50, lon: 50 }
  // {JSON.stringify(data)}

  return (
    <></>
  )
}

export default App
