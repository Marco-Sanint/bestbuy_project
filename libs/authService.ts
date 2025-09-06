import { LoginDTO } from "../interfaces/login";
import Cookies from "js-cookie";

// Esta función simula la llamada al backend.
// En un proyecto real, aquí usarías `fetch` o `axios` para comunicarte con el servidor.
const mockLoginBackend = async (body: LoginDTO) => {
  // Simula un retraso de 1 segundo para imitar la latencia de la red.
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Verifica si las credenciales son las correctas
  if (body.user === "test@example.com" && body.password === "password123") {
    // Si las credenciales son correctas, retorna un objeto con el token
    return {
      success: true,
      access_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
      message: "Login successful"
    };
  } else {
    // Si las credenciales son incorrectas, lanza un error
    throw new Error("Credenciales incorrectas");
  }
};

export const loginService = async (body: LoginDTO) => {
  try {
    const response = await mockLoginBackend(body);
    
    if (response && response.access_token) {
      // Almacena el token en la cookie
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