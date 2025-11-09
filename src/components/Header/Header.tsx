import { useLocation, useNavigate } from 'react-router-dom';
import NavButton from '../NavButton/NavButton';
import ReColhe from '../../assets/logo/logo-re-colhe.png';
import voltar from '../../assets/icons/voltar.png';
import moradorAvatar from '../../assets/icons/header/morador-avatar.png';
import empresaAvatar from '../../assets/icons/header/empresa-avatar.png';
import notificacoes from '../../assets/icons/header/notificacao.png';
import { useState, useEffect } from 'react';
import './Header.css';

type HeaderProps = {
  className?: string,
}

const Header = ({ className } : HeaderProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;

  const [userType, setUserType] = useState<string | null>(null);

  useEffect(() => {
    setUserType(localStorage.getItem('userType'));
  }, []);

  return (
    <header className={className}>
      {currentPath === '/home' ? (
        <img src={ReColhe} alt="Logo da Re.Colhe" className="logo-header" />
      ) : (
        <NavButton onClick={() => navigate(-1)} className="return">
          <img src={voltar} alt="Voltar para página anterior" />
        </NavButton>
      )}

      {currentPath !== '/notificacoes' && (
        <NavButton className="notifications">
          <img src={notificacoes} alt="Ir para notificações" />
        </NavButton>
      )}

      {/* Avatar condicional */}
      {userType === 'morador' && <img src={moradorAvatar} alt="Avatar do morador" className="avatar" />}
      {userType === 'empresa' && <img src={empresaAvatar} alt="Avatar da empresa" className="avatar" />}
    </header>
  );
};

export default Header;
