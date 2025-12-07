import { useMap } from "react-leaflet";

export default function MapClick({
  onMapClick,
}: {
  onMapClick: (lat: number, lon: number) => void;
}) {
  const map = useMap();

  map.on("click", (e) => {
    const { lat, lng } = e.latlng;
    console.log(lat, lng);
    map.panTo([lat, lng]);
    onMapClick(lat, lng);
  });
  return null;
}
