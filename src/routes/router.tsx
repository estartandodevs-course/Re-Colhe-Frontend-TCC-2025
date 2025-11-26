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
import Forum from "../pages/Forum/Forum";
import MenuDicas from "../pages/MenuDicas/MenuDicas";
import NovaSolicitacao from "../pages/NovaSolicitacao/NovaSolicitacao";
import DicasReciclagem from "../pages/DicasReciclagem/DicasReciclagem";
import Aprender from "../pages/Aprender/Aprender";

const router = createBrowserRouter([
  { path: "/", element: <Inicio /> },
  { path: "/selecionar-perfil", element: <PerfilSelector /> },
  { path: "/login", element: <Login /> },
  { path: "/home", element: <Home /> },
  { path: "/menu", element: <Menu /> },
  { path: "/meus-dados", element: <DadosUsuario /> },
  { path: "/pevs", element: <PevsFavoritos /> },
  { path: "/preferencias", element: <Preferencias /> },
  { path: "/ajuda", element: <Ajuda /> },
  { path: "/notificacoes", element: <Notificacoes /> },
  { path: "/pontos-de-coleta", element: <PontosDeColeta/> },
  { path: "/forum", element: <Forum /> },
  { path: "/menu-dicas", element: <MenuDicas /> },
  { path: "/nova-solicitacao", element: <NovaSolicitacao /> },
  { path: "/dicas-reciclagem", element: <DicasReciclagem /> },
  { path: "/aprenda", element: <Aprender /> },
]);

export default router;