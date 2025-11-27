import Header from '../../components/Header/Header';
import FooterNavBar from '../../components/FooterNavBar/FooterNavBar';
import { useState, useEffect } from 'react';
import notepad from '../../assets/icons/menu/notepad.png';
import heart from '../../assets/icons/menu/heart.png';
import gear from '../../assets/icons/menu/gear.png';
import help from '../../assets/icons/menu/help.png';
import logout from '../../assets/icons/menu/logout.png';
import { Link } from 'react-router-dom';
import './Menu.css';

const Menu = () => {
  const [userType, setUserType] = useState<string | null>(null);
  const [userName, setUserName] = useState<string | null>(null);

  useEffect(() => {
    setUserType(localStorage.getItem('userType'));
    setUserName(localStorage.getItem('userName'));
  }, [])

  return (
    <>
      <Header />
      <main className="menu-main">
        <div>{userType === 'morador' && <h1> {userName}</h1>}
          {userType === 'empresa' && <h1> {userName}</h1>}
        </div >
        <nav>
          <ul>
            <li><Link to="/meus-dados" className="link"><img src={notepad} alt="Ícone de um bloco de notas" /><div><h3>Meus dados</h3></div></Link></li>
            <li><Link to="/pevs" className="link"><img src={heart} alt="Ícone de um coração" /><div><h3>PEVs favoritos</h3><span>Pontos de Entrega Voluntária</span></div></Link></li>
            <li><Link to="/em-desenvolvimento" className="link"><img src={gear} alt="Ícone de uma engranegem" /><div><h3>Preferências</h3></div></Link></li>
            <li><Link to="/ajuda" className="link"><img src={help} alt="Ícone de interrogação" /><div><h3>Ajuda</h3></div></Link></li>
            <li><Link to="/" className="link"><img src={logout} alt="Ícone indicando logout" /><div><h3>Sair</h3></div></Link></li>
          </ul>
        </nav>
      </main >
      <FooterNavBar />
    </>
  )
}

export default Menu;