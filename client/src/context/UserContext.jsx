import React, { useState, createContext } from "react";

export const UserDataContext = createContext();

const Usercontext = ({ children }) => {
  // ✅ children, not child
  const [user, setUser] = useState({
    email: "",
    fullName: {
      firstName: "",
      lastName: "",
    },
  });

  return (
    <UserDataContext.Provider value={{ user, setUser }}>
      {children}
    </UserDataContext.Provider>
  );
};

export default Usercontext;
