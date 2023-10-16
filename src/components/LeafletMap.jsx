/* eslint-disable react/prop-types */
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";


export const LeafletMap = ({ position }) => {
  const markerIcon = new Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/128/2776/2776067.png",
    iconSize: [38, 38]
  })

  return (
    <div className="h-72 lg:w-[25rem]  w-full  lg:rounded-lg lg:h-full">
      <MapContainer
        center={position}
        zoom={16}
        style={{ height: "100%", width: "100%"}}
        
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={markerIcon} ></Marker>
      </MapContainer>
    </div>
  );
};
