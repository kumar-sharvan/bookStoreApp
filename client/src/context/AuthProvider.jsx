import React, { createContext, useContext, useState } from "react";

// Create the AuthContext
export const AuthContext = createContext();

// AuthProvider component
const AuthProvider = ({ children }) => {
  // ✅ Get token from localStorage
  const token = localStorage.getItem("token");

  let initialUser = undefined;
  try {
    initialUser = token ? JSON.parse(token) : undefined;
  } catch (error) {
    console.error("Invalid token format:", error);
    initialUser = undefined;
  }

  const [authUser, setAuthUser] = useState(initialUser);

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
