import InputBar from "../../components/InputBar/InputBar";
import Logo2 from "../../assets/logo/logo-re-colhe2.png";
import voltar from "../../assets/icons/voltar.png";
import NavButton from "../../components/NavButton/NavButton";
import "./Login.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { login } from "../../services/authService";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state as { userType?: "morador" | "empresa" };
  const userType = state?.userType;

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);

  const handleLogin = async () => {
    if (!userType) {
      setMensagem("Tipo de usuário não definido.");
      return;
    }

    if (!email || !senha) {
      setMensagem("Preencha email e senha.");
      return;
    }

    setLoading(true);
    setMensagem(null);

    const result = await login({
      email,
      senha,
      userType,
    });

    setLoading(false);

    if (result.success) {
      setLoginSuccess(true);
      setMensagem(`Login bem-sucedido como ${userType}!`);

      localStorage.setItem("token", result.data.token);
      localStorage.setItem("email", result.data.email);
      localStorage.setItem("userName", result.data.userName);
      localStorage.setItem("cep", result.data.cep);
      localStorage.setItem("userType", userType);
      localStorage.setItem("usuarioId", result.data.usuarioId.toString());
      localStorage.setItem("userTypeApi", result.data.userType);

      setTimeout(() => {
        navigate("/home");
      }, 1000);

    } else {
      setLoginSuccess(false);
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
          <h1 className="title">
            Olá {userType}.<br /> Bem vindo ao Re.Colhe!
          </h1>
        )}

        <h2 className="login-title">Login</h2>
        <h3 className="credential">Entre com as suas credenciais</h3>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin();
          }}
          className="login-form"
        >
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

          <NavButton
            label={loading ? "Entrando..." : "Entrar"}
            className="login-button"
            onClick={handleLogin}
          />
          
          {mensagem && (
            <p className={loginSuccess ? "mensagem-sucesso" : "mensagem-erro"}>
              {mensagem}
            </p>
          )}
        </form>
      </section>
    </main>
  );
};

export default Login;