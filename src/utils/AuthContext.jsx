import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setuser] = useState(false);

  useEffect(() => {
    setLoading(false);
  }, []);

  const registerUser = (userInfo) => {};
  const loginUser = (userInfo) => {};
  const logoutUser = (userInfo) => {};
  const checkUserStatus = (userInfo) => {};

  const contextData = {
    user,
    registerUser,
    loginUser,
    logoutUser,
    checkUserStatus,
  };

  return (
    <AuthContext.Provider value={contextData}>
      {loading ? <p>Loading...</p> : children}{" "}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthContext;
