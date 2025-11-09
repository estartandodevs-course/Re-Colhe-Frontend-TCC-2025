import { useLocation } from 'react-router-dom';
import NavButton from '../NavButton/NavButton';
import './FooterNavBar.css';

// Ícones normais
import homeIcon from '../../assets/icons/nav-footer/home-menu.png';
import aprendaIcon from '../../assets/icons/nav-footer/aprenda-menu.png';
import forumIcon from '../../assets/icons/nav-footer/forum-menu.png';
import menuIcon from '../../assets/icons/nav-footer/menu.png';

// Ícones ativos (verdes)
import homeIconActive from '../../assets/icons/nav-footer/home-menu-green.png';
import aprendaIconActive from '../../assets/icons/nav-footer/aprenda-menu-green.png';
import forumIconActive from '../../assets/icons/nav-footer/forum-menu-green.png';
import menuIconActive from '../../assets/icons/nav-footer/menu-green.png';


const FooterNavBar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <nav className="footer-nav">
      <ul>
        <li>
          <NavButton to="/home" className="home">
            <img
              src={currentPath === '/home' ? homeIconActive : homeIcon}
              alt="Página Home"
            />
          </NavButton>
        </li>
        <li>
          <NavButton to="/aprenda" className="aprenda">
            <img
              src={currentPath === '/aprenda' ? aprendaIconActive : aprendaIcon}
              alt="Página Aprenda"
            />
          </NavButton>
        </li>
        <li>
          <NavButton to="/forum" className="forum">
            <img
              src={currentPath === '/forum' ? forumIconActive : forumIcon}
              alt="Página Fórum"
            />
          </NavButton>
        </li>
        <li>
          <NavButton to="/menu" className="menu">
            <img
              src={currentPath === '/menu' ? menuIconActive : menuIcon}
              alt="Menu"
            />
          </NavButton>
        </li>
      </ul>
    </nav>
  );
};

export default FooterNavBar;
