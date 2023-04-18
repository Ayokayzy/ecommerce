import { createContext, useState, useEffect } from "react";

export const GlobalContext = createContext({
  dropdown: null,
  toggleDropdown: () => {},
  auth: null,
  handleAuth: () => {},
});

export const GlobalProvider = ({ children }) => {
  const [dropdown, setDropdown] = useState(false);
  const [auth, setAuth] = useState(null);

  const handleAuth = (token) => {
    localStorage.setItem("__TOKEN", token);
    setAuth(token);
  };

  const logout = () => {
    localStorage.removeItem("__TOKEN");
    setAuth(null);
  };

  useEffect(() => {
    setAuth(localStorage.getItem("__TOKEN"));
  }, [auth]);

  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };

  const value = {
    dropdown,
    toggleDropdown,
    auth,
    handleAuth,
    logout,
  };
  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};
