import Logo2 from '../../assets/logo/logo-re-colhe2.png';
import Casa from '../../assets/icons/casa.png';
import Empresa from '../../assets/icons/empresa.png';
import NavButton from '../../components/NavButton/NavButton';
import './PerfilSelector.css';

const PerfilSelector = () => {
  return (
    <main className="perfil-main">
      <section className="perfil-selector-section">
        <img src={Logo2} alt="Logo Re.Colhe, é o símbolo de reciclágem mas com estilo da natureza, formados por folhas de planta" className="logo2" />
        <h1 className="title-ps">Escolha como deseja fazer parte da mudança.</h1>
        {/* Morador */}
        <NavButton to="/login" state={{ userType: 'morador' }} className="button-morador">
          <img src={Casa} alt="" />
          <span>Sou morador</span>
        </NavButton>

        {/* Empresa */}
        <NavButton to="/login" state={{ userType: 'empresa' }} className="button-morador">
          <img src={Empresa} alt="" />
          <span>Sou empresa</span>
        </NavButton>
      </section>
    </main>
  );
}

export default PerfilSelector;
