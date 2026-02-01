import React, { createContext, useEffect, useState } from 'react';
import { AuthContextType, User } from '../types/auth';
import { saveItem, getItem, removeItem } from '../storage/storage';

export const AuthContext = createContext<AuthContextType>({} as AuthContextType);

const MOCK_USER: User = {
  id: '1',
  name: 'Test User',
  email: 'test@pickuppro.com',
  role: 'driver', // or admin / customer
};

const MOCK_TOKEN = 'mock-access-token';

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const restoreSession = async () => {
    const storedToken = await getItem<string>('accessToken');
    const storedUser = await getItem<User>('user');

    if (storedToken && storedUser) {
      setToken(storedToken);
      setUser(storedUser);
    }

    setIsLoading(false);
  };

  const login = async (_email: string, _password: string) => {
    // 🔕 API skipped intentionally

    setToken(MOCK_TOKEN);
    setUser(MOCK_USER);

    await saveItem('accessToken', MOCK_TOKEN);
    await saveItem('user', MOCK_USER);
  };

  const logout = async () => {
    setToken(null);
    setUser(null);

    await removeItem('accessToken');
    await removeItem('user');
  };

  useEffect(() => {
    restoreSession();
  }, []);

  return (
    <AuthContext.Provider value={{ user, token, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
