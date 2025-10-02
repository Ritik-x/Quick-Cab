import React, { useEffect } from "react";
import { useContext } from "react";
import { UserDataContext } from "../context/Usercontext";
import { useNavigate } from "react-router-dom";
const UserProtected = ({ children }) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  console.log(token);

  useEffect(() => {
    if (!token) {
      navigate("/userlogin");
      return;
    }
  }, [token]);
  return <>{children}</>;
};

export default UserProtected;
