import { LoginDTO } from "../interfaces/login";
import Cookies from "js-cookie";

const mockLoginBackend = async (body: LoginDTO) => {
  await new Promise(resolve => setTimeout(resolve, 1000));

  if (body.user === "test@example.com" && body.password === "password123") {
    return {
      success: true,
      access_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
      message: "Login successful"
    };
  } else {
    throw new Error("Credenciales incorrectas");
  }
};

export const loginService = async (body: LoginDTO) => {
  try {
    const response = await mockLoginBackend(body);
    
    if (response && response.access_token) {
      Cookies.set('jwt_token', response.access_token, { expires: 7, secure: true, sameSite: 'strict' });
      return response;
    } else {
      throw new Error("No se recibió un token de acceso válido.");
    }
  } catch (error) {
    console.error("Error en la solicitud de login:", error);
    throw error;
  }
};