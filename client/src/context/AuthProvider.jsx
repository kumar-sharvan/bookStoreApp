import React, { createContext, useContext, useState } from "react";

// Create the AuthContext
export const AuthContext = createContext();

// AuthProvider component
const AuthProvider = ({ children }) => {
  const initialUser = localStorage.getItem("token");
  const [authUser, setAuthUser] = useState(
    initialUser ? JSON.parse(initialUser) : undefined
  );

  return (
    <AuthContext.Provider value={[authUser, setAuthUser]}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom Hook to use the AuthContext
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export default AuthProvider;
