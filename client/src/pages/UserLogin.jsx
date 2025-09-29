import React from "react";

const UserLogin = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <form className="bg-gray-800 text-white rounded-xl p-10 w-96 shadow-lg space-y-6">
        {/* Logo */}
        <h1 className="text-3xl font-bold text-center mb-6 hover:scale-105 transition-transform cursor-pointer">
          QuickCab
        </h1>

        {/* Welcome */}
        <h2 className="text-xl font-semibold text-center text-gray-200">
          Sign in to your account
        </h2>

        {/* Email */}
        <div className="flex flex-col">
          <label className="mb-1 text-gray-300 font-medium">Email</label>
          <input
            type="email"
            required
            placeholder="john@gmail.com"
            className="px-4 py-3 rounded-lg bg-gray-400 border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition"
          />
        </div>

        {/* Password */}
        <div className="flex flex-col">
          <label className="mb-1 text-gray-300 font-medium">Password</label>
          <input
            type="password"
            required
            placeholder="••••••••"
            className="px-4 py-3 rounded-lg bg-gray-300 border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition"
          />
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg shadow-md transition transform hover:scale-[1.02] active:scale-95"
        >
          Login
        </button>

        {/* Forgot / Sign up */}
        <p className="text-center text-sm text-gray-400">
          Don’t have an account?{" "}
          <a href="#" className="text-blue-500 hover:underline font-medium">
            Sign up
          </a>
        </p>
      </form>
    </div>
  );
};

export default UserLogin;
