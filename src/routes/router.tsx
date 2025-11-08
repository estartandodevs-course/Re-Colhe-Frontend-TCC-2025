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
import PontosDeColeta from "../pages/PontosDeColeta/PontosDeColeta";
import Solicitacoes from "../pages/Solicitacoes/Solicitacoes";
import Informacoes from "../pages/Informacoes/Informacoes";
import NovaSolicitacao from "../pages/NovaSolicitacao/NovaSolicitacao";
import DicasReciclagem from "../pages/DicasReciclagem/DicasReciclagem";

const router = createBrowserRouter([
  { path: "/", element: <Inicio /> },
  { path: "/selecionar-perfil", element: <PerfilSelector /> },
  { path: "/login", element: <Login /> },
  { path: "/home", element: <Home /> },
  { path: "/menu", element: <Menu /> },
  { path: "/dados", element: <DadosUsuario /> },
  { path: "/pevs", element: <PevsFavoritos /> },
  { path: "/preferencias", element: <Preferencias /> },
  { path: "/ajuda", element: <Ajuda /> },
  { path: "/notificacoes", element: <Notificacoes /> },
  { path: "/pontos-de-coleta", element: <PontosDeColeta/> },
  { path: "/forum", element: <Solicitacoes /> },
  { path: "/informacoes", element: <Informacoes /> },
  { path: "/novasolicitacao", element: <NovaSolicitacao /> },
  { path: "/aprenda", element: <DicasReciclagem /> },
]);

export default router;