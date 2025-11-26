import api from './api';
import { jwtDecode } from 'jwt-decode';

export type UserType = 'Comum' | 'Colaborador';

export type LoginPayload = {
  email: string;
  senha: string;
  userType: 'morador' | 'empresa';
};

export type LoginResult =
  | {
      success: true;
      data: {
        userName: string;
        email: string;
        token: string;
        cep: string;
        usuarioId: number;
        userType: UserType;
      };
    }
  | {
      success: false;
      error: string;
    };

type JwtPayload = {
  id: string;
  nome: string;
  email: string;
  tipo_usuario: string;
};

type LoginResponse = {
  token: string;
};

type ApiErrorResponse = {
  erros: string[];
};

type ApiError = {
  response?: {
    status: number;
    data: ApiErrorResponse;
  };
};

const tipoUsuarioMap: Record<string, UserType> = {
  '1': 'Comum',
  '2': 'Colaborador'
};

export async function login(payload: LoginPayload): Promise<LoginResult> {
  try {
    const response = await api.post<LoginResponse>('/api/v1/Auth/login', {
      email: payload.email,
      senha: payload.senha
    });

    const token = response.data.token;
    const decodedToken: JwtPayload = jwtDecode(token);

    if (!decodedToken.id) {
      return {
        success: false,
        error: "Dados do usuário incompletos no token."
      };
    }

    const usuarioId = parseInt(decodedToken.id);
    const userType = tipoUsuarioMap[decodedToken.tipo_usuario] || 'Comum';

    const expectedType = payload.userType === 'morador' ? 'Comum' : 'Colaborador';
    if (userType !== expectedType) {
      return {
        success: false,
        error: `Este login é para ${userType === 'Comum' ? 'morador' : 'empresa'}. Selecione o tipo correto.`
      };
    }

    return {
      success: true,
      data: {
        userName: decodedToken.nome || 'Usuário',
        email: decodedToken.email,
        token: token,
        cep: '00000-000',
        usuarioId: usuarioId,
        userType: userType
      }
    };

  } catch (error: unknown) {
    const apiError = error as ApiError;
    
    if (apiError.response?.status === 400) {
      const errorMessage = apiError.response.data?.erros?.join(', ') || 'Email ou senha inválidos.';
      return { 
        success: false,
        error: errorMessage
      };
    }
    
    return { 
      success: false,
      error: "Erro de conexão. Tente novamente."
    };
  }
}