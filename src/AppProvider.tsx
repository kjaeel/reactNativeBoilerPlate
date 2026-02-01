import React from 'react';
import { AuthProvider } from './context/AuthContext';
import { AppProvider as StateProvider } from './context/AppContext';

export default function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <StateProvider>{children}</StateProvider>
    </AuthProvider>
  );
}
