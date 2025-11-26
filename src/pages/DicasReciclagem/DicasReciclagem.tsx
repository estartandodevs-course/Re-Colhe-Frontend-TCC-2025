import { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import NavButton from '../../components/NavButton/NavButton';
import recicle from '../../assets/icons/dicas-reciclagem/recicle.png';
import recicle2 from '../../assets/icons/dicas-reciclagem/recicle2.png';
import FooterNavBar from '../../components/FooterNavBar/FooterNavBar';
import './DicasReciclagem.css';

const DicasDeReciclagem = () => {
  const [userType, setUserType] = useState<string | null>(null);

  useEffect(() => {
    setUserType(localStorage.getItem('userType'));
  }, []);

  return (
    <>
      <Header />
      <main className="pagina-dicas-reciclagem">
        {userType === 'morador' && (<h1 className="titulo-dicas-reciclagem">Dicas de Reciclagem</h1>)}
        {userType === 'empresa' && (<h1 className="titulo-dicas-reciclagem">Boas Práticas de Descarte</h1>)}

        {userType === 'morador' && (<h2 className="subtitulo-dicas-reciclagem">Inspire-se com textos e vídeos cheios de boas ideias</h2>)}
        {userType === 'empresa' && (<h2 className="subtitulo-dicas-reciclagem">Inspire-se com textos e vídeos cheios de boas ideias para sua empresa</h2>)}

        <section className="dicas-section">
          <NavButton to="/aprenda" className="button-nav-dicas">
            <img src={userType === 'morador' ? recicle : recicle2} alt="Botão de navegação para fórum" />
            {userType === 'morador' && (
              <div>
                <h3>Manual Prático de Reciclagem</h3>
                <span>Comece a separar seu lixo de forma simples e correta hoje!</span>
              </div>
            )}
            {userType === 'empresa' && (
              <div>
                <h3>Boas Práticas de Descarte</h3>
                <span>Dicas rápidas para gerenciar resíduos da sua empresa</span>
              </div>
            )}
          </NavButton>

          <div className="video-container">
            <iframe
              width="560"
              height="315"
              src={userType === 'morador' ? "https://www.youtube-nocookie.com/embed/Y8Vhj9YVLgI?si=F1SWXS-kqTlRu6JS&amp;controls=0" : "https://www.youtube-nocookie.com/embed/lZohdiZbXB0?si=XctXpMiqPWKLbj4p&amp;controls=0"}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
            {userType === 'morador' ? (<h1>Como Separar o Lixo: GUIA PRÁTICO DE RECICLAGEM DOMÉSTICA</h1>) : (<h1>Gestão de Resíduos Industrial | Como é feita e principais benefícios</h1>)}
          </div>
        </section>
        <section className="dicas-section">
          <NavButton to="" className="button-nav-dicas">
            <img src={recicle} alt="Botão de navegação para fórum" />
            {userType === 'morador' && (
              <div>
                <h3>O que é reciclável de verdade?</h3>
                <span>Dicas práticas para evitar erros comuns</span>
              </div>
            )}
            {userType === 'empresa' && (
              <div>
                <h3>Sustentabilidade corporativa</h3>
                <span>Separe corretamente os resíduos e reduza o impacto ambiental.</span>
              </div>
            )}
          </NavButton>

          <div className="video-container">
            <iframe
              width="560"
              height="315"
              src={userType === 'morador' ? "https://www.youtube-nocookie.com/embed/H4XNl32NrII?si=-6zVH-CCwHdo0c9Z&amp;controls=0" : "https://www.youtube-nocookie.com/embed/wp7EGMw2GX0?si=6TK7Y87BfgMorFXi&amp;controls=0"}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
            {userType === 'morador' ? (<h1>Saiba quais produtos podem ser recicláveis</h1>) : (<h1>Sustentabilidade Corporativa: Sua Empresa Está Preparada?</h1>)}
          </div>
          <hr />
        </section>
      </main>
      <FooterNavBar />
    </>
  );
};

export default DicasDeReciclagem;