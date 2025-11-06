import { Link } from "react-router-dom";
import "./Inicio.css"; // opcional: para estilos externos

function Inicio() {
  return (
    <div className="inicio-container">
      <header>
        <h1>Página Inicial</h1>
        <p>Bem-vindo ao sistema de coleta inteligente!</p>
      </header>

      <nav className="inicio-nav">
        <ul>
          <li><Link to="/perfil">Selecionar Perfil</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/menu">Menu</Link></li>
          <li><Link to="/dados">Dados do Usuário</Link></li>
          <li><Link to="/pevs">Pevs Favoritos</Link></li>
          <li><Link to="/preferencias">Preferências</Link></li>
          <li><Link to="/ajuda">Ajuda</Link></li>
          <li><Link to="/notificacoes">Notificações</Link></li>
          <li><Link to="/mapa">Mapa de Coleta</Link></li>
          <li><Link to="/solicitacoes">Solicitações</Link></li>
          <li><Link to="/informacoes">Informações</Link></li>
          <li><Link to="/novasolicitacao">Nova Solicitação</Link></li>
          <li><Link to="/dicas">Dicas de Reciclagem</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Inicio;