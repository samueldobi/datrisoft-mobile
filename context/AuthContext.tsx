import { createContext, PropsWithChildren, useContext, useState } from "react";
// import * as SecureStore from "expo-secure-store";

interface AuthContextTypes{
    user:any;
    login: (userData: any) => Promise<void>;
    logout: () => Promise<void>;
}
export const AuthContext = createContext<AuthContextTypes | undefined>(undefined);
export const AuthProvider=({children}: PropsWithChildren)=>{
    const [user, setUser] = useState(null);
    const login = async (userData:any)=>{
        console.log('Setting user:', userData);
        setUser(userData);
    };
    const logout = async ()=>{
        setUser(null);
    }
    return(
         <AuthContext.Provider  value={{user, login, logout}}>
            {children}
        </AuthContext.Provider> 
    )
   
}
export const useAuth = ()=>{
    const context =   useContext(AuthContext);
     if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}