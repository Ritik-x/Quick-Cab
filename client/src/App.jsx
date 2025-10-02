import React, { useContext } from "react";
import Home from "./pages/Home";
import UserLogin from "./pages/UserLogin";
import CaptainLogin from "./pages/CaptainLogin";
import Captainsignup from "./pages/Captainsignup";
import Usersignup from "./pages/Usersignup";
import { Routes, Route } from "react-router-dom";
import Start from "./pages/Start";
import { UserDataContext } from "./context/Usercontext";
import UserProtected from "./pages/UserProtected";

const App = () => {
  const ans = useContext(UserDataContext);
  console.log(ans);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/userlogin" element={<UserLogin />} />
        <Route path="/captainlogin" element={<CaptainLogin />} />
        <Route path="/captainsignup" element={<Captainsignup />} />
        <Route path="/usersignup" element={<Usersignup />} />
        <Route
          path="/home"
          element={
            <UserProtected>
              <Start />
            </UserProtected>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
