import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface AuthContextType {
  login: (username: string, password: string) => Promise<void>;
  // Add other context properties like `logout` or `currentUser` as needed
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const login = async (username: string, password: string): Promise<void> => {

  useEffect(() => {
    const isAuth = localStorage.getItem('isAuth');
    setIsLoggedIn(!!isAuth);
  }, []);

  const login = () => {
    localStorage.setItem('isAuth', 'true');
    setIsLoggedIn(true);
  };

  const logout = () => {
    localStorage.removeItem('isAuth');
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
