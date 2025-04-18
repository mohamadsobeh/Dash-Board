import React, { useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const mockUser = { email: "mohammadsobh22@gmail.com", password: "mm12345" };

    if (email === mockUser.email && password === mockUser.password) {
      Cookies.set("authToken", "mockAuthToken12345", { expires: 30 });
        navigate("/dashboard");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-[#0a0a0abd] font-sans overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#4a4a4a] via-[#9f8854] to-[#0a0a0abd] opacity-50 z-0"></div>
      <div className="absolute w-[500px] h-[500px] flex justify-center items-center z-10">
        <i
          className="absolute inset-0 border-2 border-[#9f8854] rounded-[410%_50%_63%_37%/41%_44%_56%_59%] animate-spin-slow opacity-70"
        ></i>
        <i
          className="absolute inset-0 border-2 border-[#9f8854] rounded-[410%_50%_56%_59%/38%_62%_63%_37%] animate-spin-fast opacity-50"
        ></i>
        <i
          className="absolute inset-0 border-2 border-[#9f8854] rounded-[410%_50%_56%_59%/38%_62%_63%_37%] animate-spin-reverse opacity-30"
        ></i>
      </div>

      {/* Login Form */}
      <form
        onSubmit={handleLogin}
        className="relative z-20 bg-gradient-to-br
         from-[#9f8854] via-[#0a0a0a] to-[#4a4a4a] p-8 
         sm:p-10 md:p-12 lg:p-14 rounded-[20px] shadow-2xl 
         w-[90%] max-w-[400px] backdrop-blur-sm border border-[#9f885455]"
      >
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-white mb-6 sm:mb-8">
          LogIn
        </h2>
        {error && (
          <p className="text-red-500 text-sm sm:text-base lg:text-lg mb-4 sm:mb-6 text-center">
            {error}
          </p>
        )}
        <div className="mb-4 sm:mb-6">
          <label
            htmlFor="email"
            className="block text-sm sm:text-base lg:text-lg font-medium text-gray-200 mb-2"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 sm:py-3 text-sm sm:text-base lg:text-lg bg-transparent border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9f8854] focus:border-transparent text-gray-200 placeholder-gray-400"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="mb-6 sm:mb-8">
          <label
            htmlFor="password"
            className="block text-sm sm:text-base lg:text-lg font-medium text-gray-200 mb-2"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 sm:py-3 text-sm sm:text-base lg:text-lg bg-transparent border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9f8854] focus:border-transparent text-gray-200 placeholder-gray-400"
            placeholder="Enter your password"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-[#9f8854] text-white py-3 px-6 rounded-lg text-sm sm:text-base lg:text-lg font-semibold hover:bg-opacity-90 transition shadow-lg"
        >
          LogIn
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
