import { useState, createContext,useContext, PropsWithChildren } from "react";

interface AuthContextTypes{
    user:any;
    login:() => void;
    signin:() => void;
    logout:()=> void;
}
export const AuthContext = createContext<AuthContextTypes | undefined>(undefined);
export const AuthProvider=({children}: PropsWithChildren)=>{
    const [user, setUser] = useState(null);
    const signin =()=>{
        console.log('hi');
    }
    const login =()=>{
        console.log('hi');
    }
    const logout =()=>{
        console.log('hi');
    }
    return(
         <AuthContext.Provider  value={{user, signin, login, logout}}>
            {children}
        </AuthContext.Provider> 
    )
   
}
export const useAuth = ()=>{
    return  useContext(AuthContext);
}