import { ReactNode, createContext } from "react";
import { api } from "../services/Api";

type SignInCredentials = {
  email: string;
  password: string;
}

type AuthContextData = {
  signIn(credentials: SignInCredentials): Promise<void>;
  isAuthenticated: boolean;
}

type AauthProviderProps = {
  children: ReactNode;
}


export const AuthContext = createContext({} as AuthContextData)

const isAuthenticated = false;

async function signIn({ email, password }: SignInCredentials) {
  const response = await api.post("/login", {email, password})
  console.log(response)
}

export function AuthProvider({ children }: AauthProviderProps) {
  return (
    <AuthContext.Provider value={{signIn, isAuthenticated}}>
        {children}
    </AuthContext.Provider>
  )
}