import { useMap } from "react-leaflet";



export default function MapClick() {
    const map = useMap();
    
    map.on("click", (e) => {
        const {lat, lng} = e.latlng;
        console.log(lat, lng);
        map.panTo([lat, lng]);
    })
    return null;
  }