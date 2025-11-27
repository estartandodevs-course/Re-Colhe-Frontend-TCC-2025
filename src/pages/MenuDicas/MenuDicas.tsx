import { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import aprendaBanner from '../../assets/icons/menu-aprenda/aprenda.png';
import SearchBar from '../../components/SearchBar/SearchBar';
import NavButton from '../../components/NavButton/NavButton';
import greenEarth from '../../assets/icons/menu-aprenda/green-earth.png';
import greenParcel from '../../assets/icons/menu-aprenda/greenparcel.png';
import greenTech from '../../assets/icons/menu-aprenda/greentech.png';
import greenSpreadsheet from '../../assets/icons/menu-aprenda/green-spreadsheet.png'
import FooterNavBar from '../../components/FooterNavBar/FooterNavBar';
import './MenuDicas.css';

const MenuDicas = () => {

  const [userType, setUserType] = useState<string | null>(null);

  useEffect(() => {
    setUserType(localStorage.getItem('userType'));
  }, []);

  return (
    <>

      <Header />
      <main className="menu-dicas">
        <section className="search-menu-dicas">
          <div>
            <h1>Quando você se informa,<br />
            recila ideia e<br />
            multiplica boa ações</h1>
            <img src={aprendaBanner} alt="Quando você se informa, recicla ideia e multiplica boas ações" />
          </div>
          <SearchBar placeholder="O que você deseja encontrar?" disabled/>
        </section>

        <nav>
          <ul className="buttons-dicas">
            <li><NavButton to="/dicas-reciclagem" className="button-nav-dicas">
              <img src={greenEarth} alt="Botão de navegação para fórum" />
              {userType === 'morador' && <div><h3>Dicas de Reciclagem</h3><span>Aprenda as melhores práticas para separar seu lixo.</span></div>}
              {userType === 'empresa' && <div><h3>Boas Práticas de Descarte</h3><span>Dicas rápidas para gerenciar resíduos da sua empresa</span></div>}
            </NavButton></li>

            <li><NavButton className="button-nav-dicas">
              <img src={greenParcel} alt="Botão de navegação para dicas" />
              {userType === 'morador' && <div><h3>Materiais e descarte</h3><span>Guia completo dos diferentes tipos de resíduos</span></div>}
              {userType === 'empresa' && <div><h3>Tipos de Resíduos</h3><span>Saiba como separar corretamente cada material.</span></div>}
            </NavButton></li>

            <li><NavButton className="button-nav-dicas">
              <img src={greenTech} alt="Botão de navegação para notificações" />
              {userType === 'morador' && <div><h3>Curiosidades Sustentáveis</h3><span>Fatos interessantes para você explorar</span></div>}
              {userType === 'empresa' && <div><h3>Sustentabilidade Corporativa</h3><span>Ideias para tornar sua empresa mais verde.</span></div>}
            </NavButton></li>

            <li><NavButton className="button-nav-dicas">
              <img src={greenSpreadsheet} alt="Botão de navegação para notificações" />
              {userType === 'morador' && <div><h3>Notícias e Campanhas Ambientais</h3><span>Fique por dentro das últimas novidades e ações.</span></div>}
              {userType === 'empresa' && <div><h3>Conecte-se com sua equipe</h3><span>Saiba como passar informações de forma eficaz.</span></div>}
            </NavButton></li>

          </ul>
        </nav>

      </main>
      <FooterNavBar />
    </>
  )
}

export default MenuDicas;