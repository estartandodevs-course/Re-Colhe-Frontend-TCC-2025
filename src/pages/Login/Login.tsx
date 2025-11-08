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

      // 🔹 Novo: salvar dados no localStorage para uso dinâmico nas próximas páginas
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
    <main>
      <div>
        <NavButton to="/selecionar-perfil">
          <img src={voltar} alt="Voltar para seleção de tipo de perfil" />
        </NavButton>
      </div>

      <img src={Logo2} alt="Logo Re.Colhe" />

      {userType ? (
        <h2>Olá {userType}. Bem vindo ao Re.Colhe!</h2>
      ) : (
        <h2>Bem vindos ao Re.Colhe!</h2>
      )}

      <h1>Login</h1>
      <h3>Entre com as suas credenciais</h3>

      <section>
        <label>
          E-mail
          <InputBar
            placeholder="Digite seu e-mail"
            className="login-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Senha
          <InputBar
            placeholder="Digite sua senha"
            type="password"
            className="login-input"
            showEyeIcon={true}
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </label>
        <div>
          <a href="#">Esqueci a senha</a>
        </div>
      </section>

      {/* Manter: botão reutilizável chamando handleLogin */}
      <NavButton label="Entrar" className="login-button" onClick={handleLogin} />

      {mensagem && <p>{mensagem}</p>}
    </main>
  );
};

export default Login;
