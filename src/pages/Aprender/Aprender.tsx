import { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import coleta1e from '../../assets/img/aprenda/coletas1-empresa.png';
import coleta1m from '../../assets/img/aprenda/coletas1-morador.png';
import desperdicio1e from '../../assets/img/aprenda/desperdicio1e.png';
import tipo1m from '../../assets/img/aprenda/tipo1m.png';
import tipo2m from '../../assets/img/aprenda/tipo2m.png';
import reciclado1m from '../../assets/img/aprenda/reciclado1m.png';
import treinamento1e from '../../assets/img/aprenda/treinamento1e.png';
import './Aprender.css';

const Aprender = () => {
  const [userType, setUserType] = useState<string | null>(null);

  useEffect(() => {
    setUserType(localStorage.getItem('userType'));
  }, []);

  return (
    <>
      <Header />
      <main className="pagina-aprender">
        {userType === 'morador' && (
          <h1 className="titulo-aprender">Manual Prático de Reciclagem</h1>
        )}
        {userType === 'empresa' && (
          <h1 className="titulo-aprender">Boas Práticas de Descarte</h1>
        )}

        <section className="artigo-aprender">
          <p>
            Reciclar é mais fácil do que parece! Com pequenos gestos no dia a dia, você ajuda a
            natureza, reduz o lixo e transforma o que seria descartado em novos recursos.
          </p>

          <ol className="lista-ordenada-aprender">
            {/* Primeira dica */}
            <li>
              <h1>
                {userType === 'morador'
                  ? 'Separe o resíduo corretamente'
                  : 'Separe corretamente os resíduos'}
              </h1>
              <p>
                {userType === 'morador'
                  ? 'Antes de tudo, tenha dois recipientes: um para resíduos recicláveis e outro para orgânicos. Lave as embalagens, retire restos de comida e seque antes de colocar na coleta.'
                  : 'Mantenha lixeiras identificadas para papel, plástico, vidro e orgânicos. Separar os materiais facilita a reciclagem e reduz o impacto ambiental.'}
              </p>
              <img
                src={userType === 'morador' ? coleta1m : coleta1e}
                alt={
                  userType === 'morador'
                    ? 'Lavando embalagens'
                    : 'Identificação de lixeiras por cor para cada tipo de material'
                }
              />
            </li>

            {/* Segunda dica */}
            <li>
              <h1>
                {userType === 'morador'
                  ? 'Conheça as cores da reciclagem'
                  : 'Reduza o desperdício'}
              </h1>
              <p>
                {userType === 'morador'
                  ? 'Cada tipo de resíduo tem sua cor! Saber isso ajuda muito na hora de descartar corretamente.'
                  : 'Reveja processos internos e identifique itens que podem ser reaproveitados ou reciclados. Menos desperdício significa economia e sustentabilidade.'}
              </p>
              {userType === 'morador' && (
                <h3>Cor da lixeira por tipo de material:</h3>
              )}
              <img
                src={userType === 'morador' ? tipo1m : desperdicio1e}
                alt={
                  userType === 'morador'
                    ? 'Corelaciona cores com tipo de material reciclável'
                    : 'Como organizar sua reciclagem.'
                }
              />
              {userType === 'morador' && (
                <img
                  src={tipo2m}
                  alt="Corelaciona cores das lixeiras com tipo de material reciclável"
                />
              )}
            </li>

            <li>
              <h1>
                {userType === 'morador'
                  ? 'Dê um novo destino ao que você não usa'
                  : 'Treine e concientiza sua equipe'}
              </h1>
              <p>
                {userType === 'morador'
                  ? 'Antes de jogar fora, pense: dá pra consertar, doar ou reutilizar? Transformar um pote, caixa ou garrafa em algo útil é uma forma linda de cuidar do planeta.'
                  : 'Organize pequenas campanhas ou lembretes sobre o descarte correto. Equipes bem informadas fazem a diferença!.'}
              </p>
              <img
                src={userType === 'morador' ? reciclado1m : treinamento1e}
                alt={
                  userType === 'morador'
                    ? 'Alguns vasos de plantas feitos de reciclagem de garrafa pet'
                    : 'Treinamento de equipe.'
                }
              />
            </li>
          </ol>
        </section>
      </main>
    </>
  );
};

export default Aprender;