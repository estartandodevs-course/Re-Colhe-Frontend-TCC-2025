import Header from '../../components/Header/Header';
import { useState, useEffect } from 'react';
import Map from '../../components/Map/Map';
import SearchBar from '../../components/SearchBar/SearchBar';
import LocationList from '../../components/LocationList/LocationList';
import { getPevs } from '../../services/pevService';
import type { Location } from '../../types/locations';
import paper from '../../assets/icons/map/pin-paper.png';
import plastic from '../../assets/icons/map/pin-plastic.png';
import metal from '../../assets/icons/map/pin-metal.png';
import glass from '../../assets/icons/map/pin-glass.png';
import './PontosDeColeta.css';

const PontosDeColeta = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [locations, setLocations] = useState<Location[]>([]);
  const [filteredLocations, setFilteredLocations] = useState<Location[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPevs = async () => {
      try {
        const pevs = await getPevs();
        setLocations(pevs);
        setFilteredLocations([]);
      } catch (error) {
        console.error('Erro ao carregar PEVs:', error);
      } finally {
        setLoading(false);
      }
    };

    loadPevs();
  }, []);

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredLocations([]);
    } else {
      const filtered = locations.filter((loc) =>
        loc.materials.some(material => 
          material.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
      setFilteredLocations(filtered);
    }
  }, [searchTerm, locations]);

  if (loading) {
    return (
      <>
        <Header />
        <main className="pontos-page">
          <div className="loading">Carregando pontos de coleta...</div>
        </main>
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="pontos-page">
        <h1 className="pontos-title">Pontos de Coleta</h1>

        <section className="positions-container">
          <Map locations={filteredLocations} className="pontos-map" />

          <section className="pontos-icons">
            <div><img src={paper} alt="Papel" /><span>Papel</span></div>
            <div><img src={plastic} alt="Plástico" /><span>Plástico</span></div>
            <div><img src={metal} alt="Metal" /><span>Metal</span></div>
            <div><img src={glass} alt="Vidro" /><span>Vidro</span></div>
          </section>
        </section>

        <section className="search-location">
          <h2 className="pontos-subtitle">
            Encontre pontos de coleta<br /> e organizações perto de você
          </h2>

          <SearchBar
            onSearch={setSearchTerm}
            placeholder="Digite o material: papel, plástico, metal ou vidro"
            buttonLabel="Buscar"
          />
        </section>

        <LocationList 
          locations={filteredLocations} 
          className="pontos-list"
          searchedMaterial={searchTerm} // Passa o material pesquisado
        />
      </main>
    </>
  );
};

export default PontosDeColeta;