import { createContext, useState } from "react";


export const AuthContext = createContext();


export default function AuthProvider({children}){

    const [model, setModel] = useState(null);
    const [authState, setAuthState] = useState("logIn");

    const logIn = (creadintial) => {
        console.log(creadintial)
    };

    const AuthData = {
        model,
        setModel,
        logIn,
        authState,
        setAuthState

    };
    
    return <AuthContext.Provider value={AuthData}>
            {children}
           </AuthContext.Provider>
};