import React, { useState } from "react";
import { Link } from "react-router-dom";
const CaptainLogin = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [data, setData] = useState();
  const submitHandler = (e) => {
    e.preventDefault();
    setData({
      email: email,
      password: password,
    });
    console.log(data);
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="bg-gray-100 rounded-xl p-10 w-96 shadow-lg space-y-6"
      >
        {/* Logo */}
        <h1 className="text-3xl font-bold text-black text-center mb-6 hover:scale-105 transition-transform cursor-pointer">
          QuickCab 🚖
        </h1>

        {/* Welcome */}
        <h2 className="text-xl font-semibold text-center text-gray-900">
          Sign in to your Captain account
        </h2>

        {/* Email */}
        <div className="flex flex-col">
          <label className="mb-1 text-gray-900 font-medium">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
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
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            placeholder="••••••••"
            className="px-4 py-3 rounded-lg bg-white border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition"
          />
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="w-full hover:bg-gray-900 text-gray-100 bg-black font-semibold py-3 rounded-lg shadow-md transition transform hover:scale-[1.02] active:scale-95"
        >
          Login
        </button>
        <p className="text-center">
          Join as Rider ?{" "}
          <Link to="/captainsignup" className="text-blue ">
            Register here{" "}
          </Link>
        </p>
        {/* Captain Button */}
        <Link
          to="/userlogin"
          className="w-full bg-green-300 rounded-lg text-black font-semibold px-5 py-3 shadow-md hover:bg-green-600 transition"
        >
          Sign in As Rider
        </Link>
      </form>
    </div>
  );
};

export default CaptainLogin;
