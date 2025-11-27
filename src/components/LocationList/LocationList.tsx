import LocationCard from '../LocationCard/LocationCard';
import type { Location } from '../../types/locations';

type LocationListProps = {
  locations: Location[];
  className?: string;
  searchedMaterial?: string;
};

function LocationList({ locations, className, searchedMaterial }: LocationListProps) {
  if (locations.length === 0) {
    return (
      <p className="location-list-empty">
        Nenhum local encontrado para esse material.
      </p>
    );
  }

  return (
    <div className={`location-list ${className ?? ''}`}>
      {locations.map((loc) => (
        <LocationCard 
          key={loc.id} 
          location={loc} 
          searchedMaterial={searchedMaterial}
        />
      ))}
    </div>
  );
}

export default LocationList;