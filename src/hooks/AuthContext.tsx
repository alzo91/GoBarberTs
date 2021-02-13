import React, { createContext, useContext, useCallback, useState } from 'react';
import api from '../services/api';

interface UserData {
  name: string;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContexData {
  user: UserData;
  signIn(credentials: SignInCredentials): Promise<void>;
  sigOut(): void;
}

const AuthContext = createContext<AuthContexData>({} as AuthContexData);

const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<UserData>({} as UserData);

  const signIn = useCallback(async ({ email, password }) => {
    // console.log('email', email, 'password', password);
    try {
      const { data } = await api.post('sessions', { email, password });
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }, []);

  const sigOut = useCallback(() => {
    setUser({ name: 'Alisson' });
  }, []);

  return (
    <AuthContext.Provider value={{ user, sigOut, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

// const useAuth = useContext(AuthContext);

export { AuthContext, AuthProvider };
