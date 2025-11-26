import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import papelIcon from '../../assets/icons/map/pin-paper.png';
import plasticoIcon from '../../assets/icons/map/pin-plastic.png';
import metalIcon from '../../assets/icons/map/pin-metal.png';
import vidroIcon from '../../assets/icons/map/pin-glass.png';
import type { Location } from '../../types/locations';

type MapProps = {
  locations: Location[];
  className?: string;
};

const iconMap: Record<string, L.Icon> = {
  papel: new L.Icon({ iconUrl: papelIcon, iconSize: [30, 30], iconAnchor: [15, 30] }),
  plástico: new L.Icon({ iconUrl: plasticoIcon, iconSize: [30, 30], iconAnchor: [15, 30] }),
  metal: new L.Icon({ iconUrl: metalIcon, iconSize: [30, 30], iconAnchor: [15, 30] }),
  vidro: new L.Icon({ iconUrl: vidroIcon, iconSize: [30, 30], iconAnchor: [15, 30] }),
};

function Map({ locations, className }: MapProps) {
  const center: [number, number] = [-22.9068, -43.1909];

  return (
    <MapContainer center={center} zoom={11} scrollWheelZoom className={className}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {locations.map((loc) => {
        const material = loc.materials[0];
        const icon = iconMap[material] ?? iconMap.papel;

        return (
          <Marker key={loc.id} position={loc.position} icon={icon}>
            <Popup>
              <strong>{loc.name}</strong><br />
              {loc.address}<br />
              De {loc.openingDays}<br />
              Das {loc.openTime} às {loc.closeTime}<br />
              {loc.phone}
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
}

export default Map;
