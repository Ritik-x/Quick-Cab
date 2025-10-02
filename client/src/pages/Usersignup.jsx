import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserDataContext } from "../context/Usercontext"; // ✅ context object import karo

const Usersignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");

  const navigate = useNavigate();
  const { user, setUser } = useContext(UserDataContext); // ✅ ab sahi

  const submitHandeler = async (e) => {
    e.preventDefault();

    const newUser = {
      firstName: firstName,
      lastName: lastname,
      email: email,
      password: password,
    };

    try {
      const baseUrl = import.meta.env.VITE_BASE_URL || "http://localhost:5000";
      console.log("Signup baseUrl:", baseUrl);
      const response = await axios.post(`${baseUrl}/user/register`, newUser);

      if (response.status === 201) {
        const data = response.data;
        setUser({
          email: email,
          fullName: { firstName: firstName, lastName: lastname },
        });
        localStorage.setItem("token", data.token);
        navigate("/userlogin");
      }
    } catch (error) {
      console.error(
        "Signup failed:",
        error?.response?.status,
        error?.response?.data || error
      );
    }

    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <form
        onSubmit={submitHandeler}
        className="bg-gray-100 rounded-xl p-10 w-96 shadow-lg space-y-6"
      >
        {/* Logo */}
        <h1 className="text-3xl font-bold text-black text-center mb-6">
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
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              placeholder="First Name"
              className="px-4 w-1/2 py-3 rounded-lg bg-white border border-gray-300"
            />
            <input
              type="text"
              value={lastname}
              onChange={(e) => setLastName(e.target.value)}
              required
              placeholder="Last Name"
              className="px-4 w-1/2 py-3 rounded-lg bg-white border border-gray-300"
            />
          </div>
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label className="mb-1 text-gray-900 font-medium">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="john@gmail.com"
            className="px-4 py-3 rounded-lg bg-white border border-gray-300"
          />
        </div>

        {/* Password */}
        <div className="flex flex-col">
          <label className="mb-1 text-gray-900 font-medium">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="••••••••"
            className="px-4 py-3 rounded-lg bg-white border border-gray-300"
          />
        </div>

        {/* Sign Up Button */}
        <button
          type="submit"
          className="w-full hover:bg-gray-900 text-gray-100 bg-black font-semibold py-3 rounded-lg"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Usersignup;
