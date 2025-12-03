import * as React from "react";
import { MapContainer, Marker, TileLayer} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import MapClick from "./MapClick";

interface Props {}

export class Map extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }



  public render() {
    return (
      <MapContainer
        center={[50, 20]}
        zoom={5}
        style={{ width: "1000px", height: "500px" }}
      >
        <MapClick />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[50, 20]} />
      </MapContainer>
    );
  }
}

 