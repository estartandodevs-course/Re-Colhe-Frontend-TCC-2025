import Header from '../../components/Header/Header';
import FooterNavBar from '../../components/FooterNavBar/FooterNavBar';
import { useState, useEffect } from 'react';
import LocationCard from '../../components/LocationCard/LocationCard';
import { getFavorites } from '../../services/favoritesService';
import type { Location } from '../../types/locations';
import heart from '../../assets/icons/menu/heart.png';
import './PevsFavoritos.css';

function PevsFavoritos() {
  const [favorites, setFavorites] = useState<Location[]>([]);
  const [loading, setLoading] = useState(true);

  const getUsuarioId = (): number => {
    return parseInt(localStorage.getItem('usuarioId') || '0');
  };

  useEffect(() => {
    const loadFavorites = async () => {
      const usuarioId = getUsuarioId();
      if (usuarioId > 0) {
        const favs = await getFavorites(usuarioId);
        setFavorites(favs);
      }
      setLoading(false);
    };

    loadFavorites();
  }, []);

  const handleToggle = (id: number, isFav: boolean) => {
    if (!isFav) {
      setFavorites(prev => prev.filter(loc => loc.id !== id));
    }
  };

  if (loading) {
    return (
      <>
        <Header />
        <main className="favoritos-page">
          <div className="loading">Carregando favoritos...</div>
        </main>
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="favoritos-page">
        <section className="favoritos-title">
          <img src={heart} alt="Ícone de um coração" />
          <div>
            <h1>PEVs favoritos</h1>
            <span>Pontos de Entrega Voluntária</span>
          </div>
        </section>

        {favorites.length === 0 ? (
          <section className="favoritos-list">
            <p className="favoritos-empty">
              Você ainda não favoritou nenhum ponto de coleta.
            </p>
          </section>
        ) : (
          <section className="favoritos-list">
            {favorites.map((loc) => (
              <LocationCard
                key={loc.id}
                location={loc}
                onToggle={handleToggle}
              />
            ))}
          </section>
        )}
      </main >
      <FooterNavBar />
    </>
  );
}

export default PevsFavoritos;