import ReColhe from '../../assets/logo/logo-re-colhe.png';
import Lixeira from '../../assets/img/lixeira.png';
import NavButton from '../../components/NavButton/NavButton';
import './Inicio.css';

function Inicio() {
  return (
    <main className="inicio-main">
      <section>
        <img src={ReColhe} alt="Logo da Re.Colhe" className="logo" />
        <h1 className="title-inicio">Transforme o jeito de descartar: Simples, digital e sustentável.</h1>
        <img src={Lixeira} alt="Uma lixeira verde com símbolo de reciclagem branco, contendo terra e dessa terra nascendo duas folhas de uma planta." className="lixeira" />
        <NavButton to="/selecionar-perfil" label="Começar" className="button-começar" />
      </section>
    </main>
  );
}

export default Inicio;