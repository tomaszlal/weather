import * as React from "react";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import MapClick from "./MapClick";
import type { Coordinates } from "../../types/ApiTypes";

interface Props {
  coordinates: Coordinates;
  onMapClick: (lat: number, lon: number) => void;
}

export class Map extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  public render() {
    return (
      <MapContainer
        center={[this.props.coordinates.lat, this.props.coordinates.lon]}
        zoom={5}
        style={{ width: "750px", height: "500px" }}
      >
        <MapClick onMapClick={this.props.onMapClick} />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          position={[this.props.coordinates.lat, this.props.coordinates.lon]}
        />
      </MapContainer>
    );
  }
}
