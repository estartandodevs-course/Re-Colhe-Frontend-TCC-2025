import Header from '../../components/Header/Header';
import SearchBar from '../../components/SearchBar/SearchBar';
import banner from '../../assets/img/home/banner-coleta.png';
import bannerEmp from '../../assets/img/home/banner-coleta-emp.png';
import mapImg from '../../assets/img/home/img-map.png';
import NavButton from '../../components/NavButton/NavButton';
import forum from '../../assets/img/home/colaboracao.png';
import check from '../../assets/img/home/check.png';
import notificacao from '../../assets/img/home/notificacao.png';
import FooterNavBar from '../../components/FooterNavBar/FooterNavBar';
import { useState, useEffect } from 'react';
import './Home.css';

function Home() {
  const [userType, setUserType] = useState<string | null>(null);

  useEffect(() => {
    setUserType(localStorage.getItem('userType'));
  }, []);
  
  return (
    <>
      <Header />
      <main>
        <SearchBar placeholder="O que você deseja encontrar?" />

        {userType === 'morador' && <img src={banner} alt="Mensagem do banner: Sua próxima coleta municipal será em 29/11 às 14h" className="banner"/>}
        {userType === 'empresa' && <img src={bannerEmp} alt="Mensagem do banner: Sua próxima coleta será em 25/11 às 15h" className="banner"/>}

        <section className="map-card">
            <img src={mapImg} alt="Miniatura de um mapa" />
          <div>
            <span>Pontos de Coleta</span>
            <NavButton to="/pontos-de-coleta" label="Ver no mapa" className="button-map-page"/>
          </div>
        </section>

        <ul className="buttons-list">
          <li><NavButton to="/forum" className="button-navs">
            <img src={forum} alt="Botão de navegação para fórum" />
            {userType === 'morador' && <div><h3>Novos tópicos do Fórum</h3><span>Onde descartar eletrônicos?</span></div>}
            {userType === 'empresa' && <div><h3>Novos tópicos do Fórum</h3><span>Como otimizar o descarte?</span></div>}
          </NavButton></li>

          <li><NavButton to="/aprenda" className="button-navs">
            <img src={check} alt="Botão de navegação para dicas" />
            {userType === 'morador' && <div><h3>Dicas Sustentáveis</h3><span>O poder do vinágre e bicarbonato.</span></div>}
            {userType === 'empresa' && <div><h3>Dicas Sustentáveis</h3><span>Reduza custos reciclando!</span></div>}
          </NavButton></li>

          <li><NavButton to="/notificacoes" className="button-navs">
            <img src={notificacao} alt="Botão de navegação para notificações" />
            {userType === 'morador' && <div><h3>Últimas notificações</h3><span>Novo ponto de coleta!</span></div>}
            {userType === 'empresa' && <div><h3>Últimas notificações</h3><span>Coleta empresarial disponível.</span></div>}
          </NavButton></li>

        </ul>
      </main>
      <FooterNavBar />
    </>
  )
}

export default Home;