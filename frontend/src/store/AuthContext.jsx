import { createContext, useContext, useMemo } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const AuthContext = createContext(null);

const defaultUser = {
  id: "1",
  name: "Guest User",
  email: "guest@barakah.com",
  phone: "+91 98765 43210",
  role: "customer",
};

export function AuthProvider({ children }) {
  const [user, setUser] = useLocalStorage("bh_user", null);
  const [isAuthenticated, setIsAuthenticated] = useLocalStorage("bh_auth", false);

  const login = (credentials) => {
    setUser({
      ...defaultUser,
      email: credentials.email,
      name: credentials.email.split("@")[0],
    });
    setIsAuthenticated(true);
    return true;
  };

  const register = (data) => {
    setUser({ ...defaultUser, name: data.name, email: data.email, phone: data.phone });
    setIsAuthenticated(true);
    return true;
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
  };

  const updateProfile = (updates) => {
    setUser((prev) => ({ ...prev, ...updates }));
  };

  const value = useMemo(
    () => ({
      user: user || defaultUser,
      isAuthenticated,
      login,
      register,
      logout,
      updateProfile,
    }),
    [user, isAuthenticated]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};
