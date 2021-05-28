import React, { createContext, useCallback, useState, useContext } from 'react';


export interface UserObject {
  id: string;
  ativo: boolean;
  cpf: string;
  rg: string;
  nome: string;
  ctps: string;
  telefone: string;
  celular: string;
  cargo: string;
  salario: number;
  created_at: Date;
  updated_at: Date;
  stores_id: string;
}

export interface SignInCredentials {
  cpf: string;
  senha: string;
}
interface AuthState {
  token: string;
  user: UserObject;
}

interface AuthContextData {
  user: UserObject;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
  token: string;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@Radana:token');
    const user = localStorage.getItem('@Radana:user');

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }
    return {} as AuthState;
  });

  const signIn = useCallback(async ({ cpf, senha }) => {
   /* const response = await api.post('sessions', {
      cpf,
      senha,
    });
    const { token, user } = response.data;
    localStorage.setItem('@Radana:token', token);
    localStorage.setItem('@Radana:user', JSON.stringify(user));

    setData({ token, user });*/
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@Radana:token');
    localStorage.removeItem('@Radana:user');
    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider
      value={{ user: data.user, token: data.token, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within a Provider');
  }
  return context;
}

export { AuthProvider, useAuth };