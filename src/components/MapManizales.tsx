
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapaManizales = () => {
  const position = [5.0703, -75.5138]; // Coordenadas de Manizales

  const SetMapView = ({ position }: { position: [number, number] | number[] }) => {
    const map = useMap();
    map.setView(position, 13);
    return null;
  };

  return (
    <MapContainer style={{ height: "400px", width: "70%" }}>
      <SetMapView position={position} />
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={position}>
        <Popup>
          Manizales, Colombia
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapaManizales;
