import { useState, useEffect } from 'react';
import type { Location } from '../../types/locations';
import { isFavorite, toggleFavorite } from '../../services/favoritesService';
import favorito from '../../assets/icons/location-card/favoritado.png';
import favoritar from '../../assets/icons/location-card/favoritar.png';
import paper from '../../assets/icons/map/pin-paper.png';
import plastic from '../../assets/icons/map/pin-plastic.png';
import metal from '../../assets/icons/map/pin-metal.png';
import glass from '../../assets/icons/map/pin-glass.png';
import './LocationCard.css'

type LocationCardProps = {
  location: Location;
  onToggle?: (id: number, isFav: boolean) => void;
  searchedMaterial?: string;
};

function LocationCard({ location, onToggle, searchedMaterial }: LocationCardProps) {
  const [favorite, setFavorite] = useState(false);

  const getUsuarioId = (): number => {
    return parseInt(localStorage.getItem('usuarioId') || '0');
  };

  useEffect(() => {
    const checkFavorite = async () => {
      const usuarioId = getUsuarioId();
      if (usuarioId > 0) {
        const fav = await isFavorite(usuarioId, location.id);
        setFavorite(fav);
      }
    };
    checkFavorite();
  }, [location.id]);

  const handleFavorite = async () => {
    const usuarioId = getUsuarioId();
    if (usuarioId === 0) {
      alert('Usuário não identificado. Faça login novamente.');
      return;
    }
    
    const success = await toggleFavorite(usuarioId, location);
    
    if (success) {
      const newFavState = !favorite;
      setFavorite(newFavState);
      if (onToggle) {
        onToggle(location.id, newFavState);
      }
    } else {
      alert('Erro ao atualizar favoritos.');
    }
  };

  const renderMaterialIcon = () => {
    const materialToShow = searchedMaterial || location.materials[0];
    
    const iconMap: Record<string, string> = {
      'papel': paper,
      'plástico': plastic,
      'plastico': plastic,
      'metal': metal,
      'vidro': glass
    };

    const iconSrc = iconMap[materialToShow.toLowerCase()] || paper;

    return (
      <span className="materials-icons">
        <img src={iconSrc} alt={materialToShow} className="material-icon" />
      </span>
    );
  };

  return (
    <section className="location-card">
      <div>
        <h3 className="location-title">
          {renderMaterialIcon()}
          {location.name}
        </h3>
        <div className="infos-container">
          <p className="location-info">{location.address}</p>
          <p className="location-info">Aberto de {location.openingDays} das {location.openTime} às {location.closeTime}</p>
          <p className="location-info">{location.phone}</p>
        </div>
      </div>
      <button
        className="favorite-button"
        onClick={handleFavorite}
        title={favorite ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
      >
        {favorite ? (
          <img src={favorito} alt="Marcado como favorito" />
        ) : (
          <img src={favoritar} alt="Marcar como favorito" />
        )}
      </button>
    </section>
  );
}

export default LocationCard;