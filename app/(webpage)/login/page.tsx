import { FcGoogle } from 'react-icons/fc';
import LoginComponent from '../../../components/molecules/LoginComponent';
import { FaApple } from "react-icons/fa";

const BestBuyLogin = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-sm">

      <div className="w-[380px] bg-white rounded-lg shadow-md p-8">
        <h1 className="text-xl font-semibold text-center mb-6">
          Sign In to Best Buy
        </h1>

        <LoginComponent />

        <div className="flex items-center my-4">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="px-2 text-sm text-gray-500">or</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

                {/* Botones externos */}
        <button className="w-full border border-gray-300 rounded-md py-2 flex items-center justify-center space-x-2 hover:bg-gray-100 transition">
          <FaApple size={18} />
          <span>Sign in with Apple</span>
        </button>

        <button className="w-full border border-gray-300 rounded-md py-2 mt-2 flex items-center justify-center space-x-2 hover:bg-gray-100 transition">
          <FcGoogle size={18} />
          <span>Iniciar sesión con Google</span>
        </button>

        <p className="mt-4 text-xs text-gray-500 text-center">
          By continuing you agree to our{" "}
          <a href="#" className="text-blue-600 hover:underline">Terms and Conditions</a>,{" "}
          our{" "}
          <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>,{" "}
          and the My Best Buy™ Program Terms.
        </p>

        <p className="mt-4 text-sm text-center">
          Don’t have an account?{" "}
          <a href="#" className="text-blue-600 hover:underline">Create an account</a>
        </p>
      </div>
    </div>
  );
};

export default BestBuyLogin;
