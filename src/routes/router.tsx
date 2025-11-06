import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import PerfilSelector from "../pages/PerfilSelector/PerfilSelector";
import Inicio from "../pages/Inicio/Inicio";
import Menu from "../pages/Menu/Menu";
import DadosUsuario from "../pages/DadosUsuario/DadosUsuario";
import PevsFavoritos from "../pages/PevsFavoritos/PevsFavoritos";
import Preferencias from "../pages/Preferencias/Preferencias";
import Ajuda from "../pages/Ajuda/Ajuda";
import Notificacoes from "../pages/Notificacoes/Notificacoes";
import MapaColeta from "../pages/MapaColeta/MapaColeta";
import Solicitacoes from "../pages/Solicitacoes/Solicitacoes";
import Informacoes from "../pages/Informacoes/Informacoes";
import NovaSolicitacao from "../pages/NovaSolicitacao/NovaSolicitacao";
import DicasReciclagem from "../pages/DicasReciclagem/DicasReciclagem";

const router = createBrowserRouter([
  { path: "/", element: <Inicio /> },
  { path: "/perfil", element: <PerfilSelector /> },
  { path: "/login", element: <Login /> },
  { path: "/home", element: <Home /> },
  { path: "/menu", element: <Menu /> },
  { path: "/dados", element: <DadosUsuario /> },
  { path: "/pevs", element: <PevsFavoritos /> },
  { path: "/preferencias", element: <Preferencias /> },
  { path: "/ajuda", element: <Ajuda /> },
  { path: "/notificacoes", element: <Notificacoes /> },
  { path: "/mapa", element: <MapaColeta /> },
  { path: "/solicitacoes", element: <Solicitacoes /> },
  { path: "/informacoes", element: <Informacoes /> },
  { path: "/novasolicitacao", element: <NovaSolicitacao /> },
  { path: "/dicas", element: <DicasReciclagem /> },
]);

export default router;