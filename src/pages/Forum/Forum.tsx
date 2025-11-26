import { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import SearchBar from '../../components/SearchBar/SearchBar';
import NavButton from '../../components/NavButton/NavButton';
import redImg from '../../assets/img/forum/red.png';
import yellowImg from '../../assets/img/forum/yellow.png';
import greenImg from '../../assets/img/forum/green.png';
import apoio from '../../assets/img/forum/apoio.png';
import './Forum.css';

import type { Solicitacao } from '../../mocks/solicitacoesMock';
import {
  solicitacoesColetaMorador,
  solicitacoesColetaEmpresa,
  solicitacoesCampanhaMorador,
  solicitacoesCampanhaEmpresa,
  solicitacoesAvisoMorador,
  solicitacoesAvisoEmpresa,
} from '../../mocks/solicitacoesMock';

const Forum = () => {
  const [perfilUsuario, setPerfilUsuario] = useState<string | null>(null);
  const [abaAtiva, setAbaAtiva] = useState<string>("coletas");

  const imagemMap: Record<string, string> = {
    red: redImg,
    yellow: yellowImg,
    green: greenImg,
  };

  const coletaMorador: Solicitacao[] = solicitacoesColetaMorador;
  const coletaEmpresa: Solicitacao[] = solicitacoesColetaEmpresa;
  const campanhaMorador: Solicitacao[] = solicitacoesCampanhaMorador;
  const campanhaEmpresa: Solicitacao[] = solicitacoesCampanhaEmpresa;
  const avisoMorador: Solicitacao[] = solicitacoesAvisoMorador;
  const avisoEmpresa: Solicitacao[] = solicitacoesAvisoEmpresa;

  const solicitacoesAtuais: Solicitacao[] =
    abaAtiva === "coletas"
      ? perfilUsuario === "morador" ? coletaMorador : coletaEmpresa
      : abaAtiva === "campanhas"
        ? perfilUsuario === "morador" ? campanhaMorador : campanhaEmpresa
        : perfilUsuario === "morador" ? avisoMorador : avisoEmpresa;

  useEffect(() => {
    setPerfilUsuario(localStorage.getItem("userType"));
  }, []);

  return (
    <>
      <Header />
      <main className="pagina-forum">
        <h1 className="forum-titulo">Fórum de solicitações</h1>
        <SearchBar placeholder="O que você deseja encontrar?" />

        <section className="forum-botoes-section">

          <NavButton
            className={`forum-botao ${abaAtiva === "coletas" ? "ativo" : ""}`}
            onClick={() => setAbaAtiva("coletas")}
          >
            Coletas
          </NavButton>
          <NavButton
            className={`forum-botao ${abaAtiva === "campanhas" ? "ativo" : ""}`}
            onClick={() => setAbaAtiva("campanhas")}
          >
            Campanhas
          </NavButton>
          <NavButton
            className={`forum-botao ${abaAtiva === "avisos" ? "ativo" : ""}`}
            onClick={() => setAbaAtiva("avisos")}
          >
            Avisos
          </NavButton>
        </section>

        <section className="forum-section">
          <ul>
            {solicitacoesAtuais.map((Solicitacao: Solicitacao) => (
              <li key={Solicitacao.id}>
                <div className="titulo-container-solicitacao">
                  <h3>{Solicitacao.titulo}</h3>
                  <span>Data: {Solicitacao.data}</span>
                  <div>
                    <img src={apoio} alt="apoio" />
                    <span>Apoios {Solicitacao.apoio}</span>
                  </div>
                </div>
                <div className="status-solicitacao">
                  <span>Status</span>
                  <img src={imagemMap[Solicitacao.imagem]} alt={Solicitacao.pendenciaAlt} />
                  <span>{Solicitacao.pendencia}</span>
                </div>
              </li>
            ))}
            {solicitacoesAtuais.length === 0 && <p>Nenhuma solicitação disponível.</p>}
          </ul>

          <NavButton to="/nova-solicitacao" label="Fazer nova solicitação" className="button-nova-solicitacao" />
        </section>
      </main>
    </>
  );
};

export default Forum;