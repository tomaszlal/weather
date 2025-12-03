import { useMap } from "react-leaflet";



export default function MapClick() {
    const map = useMap();
    
    map.on("click", (e) => {
        console.log(e)
    })
    return null;
  }