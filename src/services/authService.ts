import { loginMock } from '../mocks/auth/authServiceMock';
import type { LoginResult } from '../mocks/auth/authServiceMock';

type LoginPayload = {
  email: string;
  senha: string;
  userType: 'morador' | 'empresa';
};

export async function login(payload: LoginPayload): Promise<LoginResult> {
  // por enquanto usa mock
  const result: LoginResult = loginMock(payload);
  return result;

  // Futuro: trocar para chamada real
  // const response = await axios.post('/api/login', payload);
  // return response.data;
}
