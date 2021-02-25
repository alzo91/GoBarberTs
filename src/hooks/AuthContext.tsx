import React, { createContext, useContext, useCallback, useState } from 'react';
import api from '../services/api';

interface AuthData {
  token: string;
  user: object;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContexData {
  user: object;
  signIn(credentials: SignInCredentials): Promise<void>;
  sigOut(): void;
}

const AuthContext = createContext<AuthContexData>({} as AuthContexData);

// const useAuth = useContext(AuthContext);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthData>(() => {
    const token = localStorage.getItem('@GoBarber:token');
    const user = localStorage.getItem('@GoBarber:user');

    if (!!token && !!user) {
      return { token, user: JSON.parse(user) };
    }
    return {} as AuthData;
  });

  const signIn = useCallback(async ({ email, password }) => {
    // console.log('email', email, 'password', password);
    try {
      const response = await api.post('sessions', { email, password });
      console.log(response);
      const { token, user } = response.data;
      localStorage.setItem('@GoBarber:token', String(token));
      localStorage.setItem('@GoBarber:user', JSON.stringify(user));
      setData({ token, user });
    } catch (err) {
      console.log(err);
    }
  }, []);

  const sigOut = useCallback(() => {
    setData({} as AuthData);
    localStorage.removeItem('@GoBarber:token');
    localStorage.removeItem('@GoBarber:user');
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, sigOut, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContexData {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used withIn a AuthProvider');
  }
  return context;
}

export { AuthContext, AuthProvider, useAuth };
