import { createContext, useState } from "react";


export const AuthContext = createContext();


export default function AuthProvider({children}){

    const [model, setModel] = useState(null);

    const logIn = (creadintial) => {
        console.log(creadintial)
    };

    const AuthData = {
        model,
        setModel,
        logIn
    };
    return <AuthContext.Provider value={AuthData}>
            {children}
           </AuthContext.Provider>
};