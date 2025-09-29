import React from "react";
import Home from "./pages/Home";
import UserLogin from "./pages/UserLogin";
import CaptainLogin from "./pages/CaptainLogin";
import Captainsignup from "./pages/Captainsignup";
import Usersignup from "./pages/Usersignup";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/userlogin" element={<UserLogin />} />
        <Route path="/captainlogin" element={<CaptainLogin />} />
        <Route path="/captainsignup" element={<Captainsignup />} />
        <Route path="usersignup" element={<Usersignup />} />
      </Routes>
    </div>
  );
};

export default App;
