import Logo from '../../components/Logo/Logo';
import Lixeira from '../../assets/img/lixeira.png';
import NavButton from '../../components/NavButton/NavButton';
import './Inicio.css'; // opcional: para estilos externos

function Inicio() {
  return (
    <main>
      <Logo />
      <h2>Transforme o jeito de descartar: Simples, digital e sustentável.</h2>
      <img src={Lixeira} alt="Uma lixeira verde com símbolo de reciclagem branco, contendo terra e dessa terra nascendo duas folhas de uma planta." />
      <NavButton to="/selecionar-perfil" label="Começar" />
    </main>
  );
}

export default Inicio;