import { createContext, useState } from "react";


export const AuthContext = createContext();


export default function AuthProvider({children}){

    const [model, setModel] = useState(false);
    const AuthData = {
        model,
        setModel
    };
    return <AuthContext.Provider value={AuthData}>
            {children}
           </AuthContext.Provider>
};