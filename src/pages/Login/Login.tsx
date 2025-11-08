import InputBar from '../../components/InputBar/InputBar';
import Logo2 from '../../assets/logo/logo-re-colhe2.png';
import voltar from '../../assets/icons/voltar.png';
import NavButton from '../../components/NavButton/NavButton';
import './Login.css';
import { useLocation } from 'react-router-dom';

const Login = () => {
  // Captura o estado enviado pelo Link
  const location = useLocation();
  const state = location.state as { userType?: 'morador' | 'empresa' };
  const userType = state?.userType;

  return (
    <>
      <div>
        <NavButton to="/selecionar-perfil"><img src={voltar} alt="Volvar para seleção de tipo de perfil" /></NavButton>
      </div>
      <img src={Logo2} alt="Logo Re.Colhe, é o símbolo de reciclágem mas com estilo da natureza, formados por folhas de planta" />

      {/* Saudação dinâmica */}
      {userType ? (
        <h2>Olá {userType}. Bem vindo ao Re.Colhe!</h2>
      ) : (
        <h2>Bem vindos ao Re.Colhe!</h2>
      )}

      <h1>Login</h1>
      <h3>Entre com as suas credenciais</h3>

      <section>
        <label htmlFor="">E-mail
          <InputBar placeholder="Digite seu e-mail" className="login-input" disabled={true} />
        </label>
        <label htmlFor="">Senha
          <InputBar
            placeholder="Digite sua senha"
            type="password"
            className="login-input"
            showEyeIcon={true}
            disabled={true}
          />
        </label>
        <div>
          <a href="#">Esqueci a senha</a>
        </div>
      </section>

      <NavButton to="/selecionar-perfil" label="Entrar" />
    </>
  );
};

export default Login;
