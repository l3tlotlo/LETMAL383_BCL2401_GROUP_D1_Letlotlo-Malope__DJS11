import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (username, password) => {
    console.log(`Attempting login with username: ${username} and password: ${password}`);
    if (username === 'Letlotlo' && password === '2468') {  // Updated credentials
      console.log('Login successful');
      setUser({ username });
      return true;
    }
    console.log('Login failed');
    return false;
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
