import { useState, useEffect } from 'react';

const useAuth = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [token, setToken] = useState(null);

  useEffect(() => {
    // Check if user is already logged in
    const savedToken = localStorage.getItem('token');
    if (savedToken) {
      setToken(savedToken);
      setIsLogin(true);
    }
  }, []);

  const login = (newToken) => {
    localStorage.setItem('token', newToken);
    setToken(newToken);
    setIsLogin(true);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
    setIsLogin(false);
  };

  return {
    isLogin,
    token,
    login,
    logout
  };
};

export default useAuth;
