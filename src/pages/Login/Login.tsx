import InputBar from '../../components/InputBar/InputBar';
import Logo2 from '../../assets/logo/logo-re-colhe2.png';
import voltar from '../../assets/icons/voltar.png';
import NavButton from '../../components/NavButton/NavButton';
import './Login.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';

// modificar para implementar endpoints da API: trocar import para o serviço real (ex: '../../services/authServiceReal')
import { login } from '../../services/authService';

// Manter para funcionamento local: tipagem do resultado do login mockado.
// modificar para implementar endpoints da API: criar um tipo vindo da API? (ex: LoginResponse)
import type { LoginResult } from '../../mocks/auth/authServiceMock';

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state as { userType?: 'morador' | 'empresa' };
  const userType = state?.userType;

  // Manter: estados locais para email, senha e mensagens podem ser reaproveitados sem mudanças.
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagem, setMensagem] = useState<string | null>(null);

  const handleLogin = async () => {
    if (!userType) {
      setMensagem('Tipo de usuário não definido.');
      return;
    }

    // Manter para funcionamento local: chamada ao serviço de login.
    // implementação futura: aqui o login vai chamar o endpoint real via axios/fetch.
    const result: LoginResult = await login({ email, senha, userType });

    if (result.success) {
      // Manter: além da mensagem, salvar token no localStorage/sessionStorage.
      setMensagem(`Login bem-sucedido como ${userType}!`);

      // salva dados no localStorage para uso dinâmico nas próximas páginas
      localStorage.setItem('token', result.data.token);
      localStorage.setItem('email', result.data.email);
      localStorage.setItem('userType', userType);


      navigate('/home');
    } else {
      // Manter: feedback de erro.
      // Possíveis modificações: pode exibir mensagens vindas do backend (ex: "Usuário não encontrado").
      setMensagem(result.error);
    }
  };

  return (
    <main className="login-main">

      <div className="return-container">
        <NavButton to="/selecionar-perfil" className="return-button">
          <img src={voltar} alt="Voltar para seleção de tipo de perfil" />
        </NavButton>
      </div>

      <section className="first-section">
        <img src={Logo2} alt="Logo Re.Colhe" className="logo2" />

        {userType && (
          <h1 className="title">Olá {userType}.<br /> Bem vindo ao Re.Colhe!</h1>
        )}

        <h2 className="login-title">Login</h2>
        <h3 className="credential">Entre com as suas credenciais</h3>

        <section className="login-section">
          <label htmlFor="email">E-mail</label>
          <InputBar
            id="email"
            placeholder="Digite seu e-mail"
            className="login-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password">Senha</label>
          <InputBar
            id="password"
            placeholder="Digite sua senha"
            type="password"
            className="login-input"
            showEyeIcon={true}
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />

          <div className="reset-password-container">
            <a href="#">Esqueci a senha</a>
          </div>
        </section>

        {/* Manter: botão reutilizável chamando handleLogin */}
        <NavButton label="Entrar" className="login-button" onClick={handleLogin} />

        {mensagem && <p>{mensagem}</p>}

      </section>
    </main>
  );
};

export default Login;
