import { moradorMock } from "./moradorMock";
import { empresaMock } from "./empresaMock";

export type LoginResult =
  | {
      success: true;
      data: {
        userName: string;
        email: string;
        senha: string;
        token: string;
      };
    }
  | {
      success: false;
      error: string;
    };

type LoginPayload = {
  email: string;
  senha: string;
  userType: "morador" | "empresa";
};

export function loginMock({
  email,
  senha,
  userType,
}: LoginPayload): LoginResult {
  if (userType === "morador") {
    if (email === moradorMock.email && senha === moradorMock.senha) {
      return { success: true, data: moradorMock };
    }
  }

  if (userType === "empresa") {
    if (email === empresaMock.email && senha === empresaMock.senha) {
      return { success: true, data: empresaMock };
    }
  }

  return { success: false, error: "Credenciais inválidas" };
}
