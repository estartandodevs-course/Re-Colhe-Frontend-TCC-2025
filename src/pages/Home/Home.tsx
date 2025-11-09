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

function Home() {
  const userType = localStorage.getItem('userType');
  return (
    <>
      <Header />
      <main>
        <SearchBar placeholder="O que você deseja encontrar?" />

        {userType === 'morador' && <img src={banner} alt="Mensagem do banner: Sua próxima coleta municipal será em 29/11 às 14h" />}
        {userType === 'empresa' && <img src={bannerEmp} alt="Mensagem do banner: Sua próxima coleta será em 25/11 às 15h" />}
        <section>
          <div>
            <img src={mapImg} alt="Miniatura de um mapa" />
          </div>
          <div>
            <span>Pontos de Coleta</span>
            <NavButton to="/pontos-de-coleta" label="Ver no mapa" />
          </div>
        </section>
        <ul>
          <li><NavButton to="/forum">
            <img src={forum} alt="Botão de navegação para fórum" />
            <div><h3>Novos tópicos do Fórum</h3><span>Como otimizar o descarte?</span></div>
          </NavButton></li>
          <li><NavButton to="/aprenda">
            <img src={check} alt="Botão de navegação para dicas" />
            <div><h3>Dicas Sustentáveis</h3><span>Reduza custos reciclando!</span></div>
          </NavButton></li>
          <li><NavButton to="/notificacoes">
            <img src={notificacao} alt="Botão de navegação para notificações" />
            <div><h3>Últimas notificações</h3><span>Coleta empresarial disponível.</span></div>
          </NavButton></li>

        </ul>
      </main>
      <FooterNavBar />
    </>
  )
}

export default Home;