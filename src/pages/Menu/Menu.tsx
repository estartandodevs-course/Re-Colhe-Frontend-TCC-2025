import Header from '../../components/Header/Header';
import FooterNavBar from '../../components/FooterNavBar/FooterNavBar';
import { useState, useEffect } from 'react';
import notepad from '../../assets/icons/menu/notepad.png';
import heart from '../../assets/icons/menu/heart.png';
import gear from '../../assets/icons/menu/gear.png';
import help from '../../assets/icons/menu/help.png';
import logout from '../../assets/icons/menu/logout.png';
import { Link } from 'react-router-dom';
import './menu.css';

function Menu() {
  const [userType, setUserType] = useState<string | null>(null);
  const [userName, setUserName] = useState<string | null>(null);

  useEffect(() => {
    setUserType(localStorage.getItem('userType'));
    setUserName(localStorage.getItem('userName'));
  }, [])

  return (
    <>
      <Header></Header>
      <main className="menu-main">
        <div>{userType === 'morador' && <h1> {userName}</h1>}
          {userType === 'empresa' && <h1> {userName}</h1>}
        </div >
        <nav>
          <ul>
            <li><img src={notepad} alt="Ícone de um bloco de notas" /><h3>Meus dados</h3></li>
            <li><Link to="/pevs" className="link"><img src={heart} alt="Ícone de um coração" /><div><h3>PEVs favoritas</h3><span>Ponto de Entrega Voluntária</span></div></Link></li>
            <li><img src={gear} alt="Ícone de uma engranegem" /><h3>Preferências</h3></li>
            <li><img src={help} alt="Ícone de interrogação" /><h3>Ajuda</h3></li>
            <li><img src={logout} alt="Ícone indicando logout" /><h3>Sair</h3></li>
          </ul>
        </nav>
      </main >
      <FooterNavBar />
    </>
  )
}

export default Menu;