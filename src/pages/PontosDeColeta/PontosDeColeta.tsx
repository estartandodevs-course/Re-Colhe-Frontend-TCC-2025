import Header from '../../components/Header/Header';
import FooterNavBar from '../../components/FooterNavBar/FooterNavBar';
import { useState } from 'react';
import Map from '../../components/Map/Map';
import SearchBar from '../../components/SearchBar/SearchBar';
import LocationList from '../../components/LocationList/LocationList';
import { mockLocations } from '../../mocks/locations';
import type { Location } from '../../mocks/locations';
import paper from '../../assets/icons/map/pin-paper.png';
import plastic from '../../assets/icons/map/pin-plastic.png';
import metal from '../../assets/icons/map/pin-metal.png';
import glass from '../../assets/icons/map/pin-glass.png';
import './PontosDeColeta.css';

const PontosDeColeta = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredLocations: Location[] = mockLocations.filter((loc) =>
    loc.materials.includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Header />
      <main className="pontos-page">
        <h1 className="pontos-title">Pontos de Coleta</h1>

        <Map locations={filteredLocations} className="pontos-map" />

        <section className="pontos-icons">
          <div><img src={paper} alt="Papel" /><span>Papel</span></div>
          <div><img src={plastic} alt="Plástico" /><span>Plástico</span></div>
          <div><img src={metal} alt="Metal" /><span>Metal</span></div>
          <div><img src={glass} alt="Vidro" /><span>Vidro</span></div>
        </section>

        <h2 className="pontos-subtitle">
          Encontre pontos de coleta e organizações perto de você
        </h2>

        <SearchBar
          onSearch={setSearchTerm}
          className="pontos-search"
          placeholder="Digite o material: papel, plástico, metal ou vidro"
          buttonLabel="Buscar"
        />

        <LocationList locations={filteredLocations} className="pontos-list" />
      </main>
      <FooterNavBar />
    </>
  );
};

export default PontosDeColeta;
