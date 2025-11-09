import { useLocation, useNavigate } from 'react-router-dom';
import NavButton from '../NavButton/NavButton';
import Logo from '../Logo/Logo';
import voltar from '../../assets/icons/voltar.png';
import moradorAvatar from '../../assets/icons/header/morador-avatar.png';
import empresaAvatar from '../../assets/icons/header/empresa-avatar.png';
import notificacoes from '../../assets/icons/header/notificacao.png';
import { useState, useEffect } from 'react';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;

  const [userType, setUserType] = useState<string | null>(null);

  useEffect(() => {
    setUserType(localStorage.getItem('userType'));
  }, []);

  return (
    <header>
      {currentPath === '/home' ? (
        <Logo />
      ) : (
        <NavButton onClick={() => navigate(-1)}>
          <img src={voltar} alt="Voltar para página anterior" />
        </NavButton>
      )}

      {currentPath !== '/notificacoes' && (
        <NavButton>
          <img src={notificacoes} alt="Ir para notificações" />
        </NavButton>
      )}

      {/* Avatar condicional */}
      {userType === 'morador' && <img src={moradorAvatar} alt="Avatar do morador" />}
      {userType === 'empresa' && <img src={empresaAvatar} alt="Avatar da empresa" />}
    </header>
  );
};

export default Header;
