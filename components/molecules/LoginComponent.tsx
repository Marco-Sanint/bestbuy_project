'use client'

import InputComponent from '../../components/atoms/InputComponent';
import { useForm, SubmitHandler, FormProvider } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import Cookies from "js-cookie"
import { LoginDTO } from "../../interfaces/login"
import { loginScheme } from "../../schemas/login"
import { loginService } from "../../libs/authService"

export default function LoginComponent() {
  const methods = useForm<LoginDTO>({
    resolver: zodResolver(loginScheme),
  });
  
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
    console.log('Errores', methods.formState.errors);
    alert('Información incompleta')
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit, onErrors)} className="space-y-4">
        <div>
          <InputComponent
            label="Email Address"
            idElement="email"
            nameRegister="user"
            typeElement="email"
          />
          {methods.formState.errors.user && (
            <p className="text-red-500 text-sm mt-1">{methods.formState.errors.user.message}</p>
          )}
        </div>

        <div>
          <InputComponent
            label="Password"
            idElement="password"
            nameRegister="password"
            typeElement="password"
          />
          {methods.formState.errors.password && (
            <p className="text-red-500 text-sm mt-1">{methods.formState.errors.password.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-md transition"
        >
          Sign In
        </button>
      </form>
    </FormProvider>
  )
}