import { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import NavButton from '../../components/NavButton/NavButton';
import logo from '../../assets/logo/logo-re-colhe2.png';
import lixeira from '../../assets/icons/notificacoes/lixeira.png';
import './Notificacoes.css';

// Importando mocks
import type { Notificacao } from '../../mocks/notificacoesMock';
import {
  notificacoesColetaMorador,
  notificacoesColetaEmpresa,
  notificacoesCampanhaMorador,
  notificacoesCampanhaEmpresa,
  notificacoesAvisoMorador,
  notificacoesAvisoEmpresa,
} from '../../mocks/notificacoesMock';

const Notificacoes = () => {
  const [perfilUsuario, setPerfilUsuario] = useState<string | null>(null);
  const [abaAtiva, setAbaAtiva] = useState<string>("coletas");

  const [coletaMorador, setColetaMorador] = useState<Notificacao[]>(notificacoesColetaMorador);
  const [coletaEmpresa, setColetaEmpresa] = useState<Notificacao[]>(notificacoesColetaEmpresa);
  const [campanhaMorador, setCampanhaMorador] = useState<Notificacao[]>(notificacoesCampanhaMorador);
  const [campanhaEmpresa, setCampanhaEmpresa] = useState<Notificacao[]>(notificacoesCampanhaEmpresa);
  const [avisoMorador, setAvisoMorador] = useState<Notificacao[]>(notificacoesAvisoMorador);
  const [avisoEmpresa, setAvisoEmpresa] = useState<Notificacao[]>(notificacoesAvisoEmpresa);

  const removerNotificacao = (id: string) => {
    if (abaAtiva === "coletas") {
      if (perfilUsuario === "morador") {
        setColetaMorador((prev) => prev.filter((n) => n.id !== id));
      } else {
        setColetaEmpresa((prev) => prev.filter((n) => n.id !== id));
      }
    }

    if (abaAtiva === "campanhas") {
      if (perfilUsuario === "morador") {
        setCampanhaMorador((prev) => prev.filter((n) => n.id !== id));
      } else {
        setCampanhaEmpresa((prev) => prev.filter((n) => n.id !== id));
      }
    }

    if (abaAtiva === "avisos") {
      if (perfilUsuario === "morador") {
        setAvisoMorador((prev) => prev.filter((n) => n.id !== id));
      } else {
        setAvisoEmpresa((prev) => prev.filter((n) => n.id !== id));
      }
    }
  };

  const notificacoesAtuais: Notificacao[] =
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
      <main className="pagina-notificacoes">
        <h1 className="titulo-notificacoes">Notificações</h1>

        <section className="notificacoes-botoes-section">
          <NavButton className={`notificacoes-botao ${abaAtiva === "coletas" ? "ativo" : ""}`}
            onClick={() => setAbaAtiva("coletas")}>Coletas</NavButton>
          <NavButton className={`notificacoes-botao ${abaAtiva === "campanhas" ? "ativo" : ""}`}
            onClick={() => setAbaAtiva("campanhas")}>Campanhas</NavButton>
          <NavButton className={`notificacoes-botao ${abaAtiva === "avisos" ? "ativo" : ""}`}
            onClick={() => setAbaAtiva("avisos")}>Avisos</NavButton>
        </section>

        <section className="notificacoes-section">
          <ul>
            {notificacoesAtuais.map((notificacao: Notificacao) => (
              <li key={notificacao.id}>
                <div className="logo-container-notificacao">
                  <img src={logo} alt="Logo Re.Colhe" />
                </div>
                <div className="titulo-container-notificacao">
                  <h3>{notificacao.titulo}</h3>
                  <span>{notificacao.mensagem}</span>
                </div>
                <div className="hora-botao-deletar">
                  <button onClick={() => removerNotificacao(notificacao.id)}>
                    <img src={lixeira} alt="Apagar notificação" />
                  </button>
                  <span>{notificacao.hora}</span>
                </div>
              </li>
            ))}
            {notificacoesAtuais.length === 0 && <p>Nenhuma notificação disponível.</p>}
          </ul>
        </section>
      </main>
    </>
  );
};

export default Notificacoes;