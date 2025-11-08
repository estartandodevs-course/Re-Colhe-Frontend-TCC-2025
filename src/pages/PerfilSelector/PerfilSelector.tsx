import Logo2 from '../../assets/logo/logo-re-colhe2.png';
import Casa from '../../assets/icons/casa.png';
import Empresa from '../../assets/icons/empresa.png';
import NavButton from '../../components/NavButton/NavButton';

const PerfilSelector = () => {
  return (
    <>
      <img src={Logo2} alt="Logo Re.Colhe, é o símbolo de reciclágem mas com estilo da natureza, formados por folhas de planta" />
      <h1>Escolha como deseja fazer parte da mudança.</h1>

      {/* Morador */}
      <NavButton to="/login" state={{ userType: 'morador' }}>
        <img src={Casa} alt="" />
        <span>Sou morador</span>
      </NavButton>

      {/* Empresa */}
      <NavButton to="/login" state={{ userType: 'empresa' }}>
        <img src={Empresa} alt="" />
        <span>Sou empresa</span>
      </NavButton>
    </>
  );
}

export default PerfilSelector;
