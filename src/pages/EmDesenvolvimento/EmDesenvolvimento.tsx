import ReColhe from '../../assets/logo/logo-re-colhe.png';
import Header from '../../components/Header/Header';
import FooterNavBar from '../../components/FooterNavBar/FooterNavBar';
import './EmDesenvolvimento.css';

const EmDesenvolvimento = () => {
  return (
    <>
      <Header />
      <main className="pagina-em-desenvolvimento">
        <div>
          <img src={ReColhe} alt="Logo da Re.Colhe" />
          <h1>Em Construção</h1>
          <span>Essa área ainda está sendo desenvolvida.<br /> Em breve você poderá explorar todas as funcionalidades do Re.Colhe aqui!</span>
        </div>
      </main>
      <FooterNavBar />
    </>
  )
}

export default EmDesenvolvimento