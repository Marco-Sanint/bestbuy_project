'use client'
import { useForm, SubmitHandler } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { FaApple } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc"
import Cookies from "js-cookie"
import { LoginDTO } from "../../interfaces/login"
import { loginScheme } from "../../schemas/login"
import { loginService } from "../../libs/authService"

export default function LoginComponent() {
  const { 
    register, 
    handleSubmit,
    formState: { errors }
  } = useForm<LoginDTO>({
    resolver: zodResolver(loginScheme)
  })
  
  const onSubmit: SubmitHandler<LoginDTO> = (data) => {
    loginService(data)
      .then((info) => {
        Cookies.set('jwt_token', info.access_token, { expires: 7, secure: true, sameSite: 'strict' })
        console.log('Token almacenado en la cookie:', Cookies.get('jwt_token'))
        alert('¡Login exitoso! Token guardado en la cookie.')
      })
      .catch(() => {
        console.error('Error en solicitud');
      })
  }

  const onErrors = () => {
    console.log('Errores', errors);
    alert('Información incompleta')
  };

    return (
    <form onSubmit={handleSubmit(onSubmit, onErrors)} className="space-y-4">
      {/* Email */}
      <div>
        <input
          {...register("user")}
          type="text"
          placeholder="Email Address"
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.user && (
          <p className="text-red-500 text-sm mt-1">{errors.user.message}</p>
        )}
      </div>

      {/* Contraseña */}
      <div>
        <input
          {...register("password")}
          type="password"
          placeholder="Password"
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.password && (
          <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-md transition"
      >
        Sign In
      </button>
    </form>
  )
}
