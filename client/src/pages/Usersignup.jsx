import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Usersignup = () => {
  const navigate = useNavigate(); // ✅ hook component ke andar hona chahiye

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <form className="bg-gray-100 rounded-xl p-10 w-96 shadow-lg space-y-6">
        {/* Logo */}
        <h1 className="text-3xl font-bold text-black text-center mb-6 hover:scale-105 transition-transform cursor-pointer">
          QuickCab
        </h1>

        {/* Welcome */}
        <h2 className="text-xl font-semibold text-center text-gray-900">
          Sign-up to your account
        </h2>

        {/* Name */}
        <div className="flex flex-col">
          <label className="mb-1 text-gray-900 font-medium">Full Name</label>
          <div className="flex gap-2">
            <input
              type="text"
              required
              placeholder="First Name"
              className="px-4 w-1/2 py-3 rounded-lg bg-white border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition"
            />
            <input
              type="text"
              required
              placeholder="Last Name"
              className="px-4 w-1/2 py-3 rounded-lg bg-white border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition"
            />
          </div>
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label className="mb-1 text-gray-900 font-medium">Email</label>
          <input
            type="email"
            required
            placeholder="john@gmail.com"
            className="px-4 py-3 rounded-lg bg-white border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition"
          />
        </div>

        {/* Password */}
        <div className="flex flex-col">
          <label className="mb-1 text-gray-900 font-medium">Password</label>
          <input
            type="password"
            required
            placeholder="••••••••"
            className="px-4 py-3 rounded-lg bg-white border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition"
          />
        </div>

        {/* Sign Up Button */}
        <button
          type="button" // ⚡ change from "submit" to "button" to avoid page reload
          onClick={() => navigate("/userlogin")}
          className="w-full hover:bg-gray-900 text-gray-100 bg-black font-semibold py-3 rounded-lg shadow-md transition transform hover:scale-[1.02] active:scale-95"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Usersignup;
