import { createContext, useEffect, useState } from "react";
import { account } from "../appWriteConfig";
import { ID } from "appwrite";


export const AuthContext = createContext();


export default function AuthProvider({children}){

    const [model, setModel] = useState(null);
    const [authState, setAuthState] = useState("logIn");
    const [isLoading, setIsloading] = useState(false);
    const [succesMessage, setSuccesMessage] = useState(null);
    const [activeAccount, setActiveAccount] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        onLoad();
    },[])


    const logIn = async (credential) => {
        // Creating email session for user
        setIsloading(true);
        const {email, password} = credential;

        try {
         await account.createEmailSession(email, password);
         await account.createEmailSession(email, password);
         const acc = await account.get();
         setActiveAccount(acc);
         setIsloading(false)

        }catch (error) {
          setIsloading(false)
          setError(error)
        }        
    };
    
    const registration = async (credential) => {
        setIsloading(true);
        const {name, email, password, passwordRepeat} = credential;
        if(password !== passwordRepeat) return;

        try{
           const response = await account.create(ID.unique(), email, password, name);
           setSuccesMessage(`ثبت نام شما باموفققیت انجام شد.`)
           await account.createEmailSession(email, password);
           const acc = await account.get();
           setActiveAccount(acc);
           setIsloading(false);
           console.log(response, acc);
           
        }catch(err){
            setIsloading(false);
            setError(err);
        }
    };

    const logOut = async () => {
        setIsloading(true)
        try{
            await account.deleteSession('current');
            setActiveAccount(null);
            setIsloading(false)
            setSuccesMessage("نشست شما باموفقییت پایان یافت .")
        }catch(err){
            setError(err.message);
            setIsloading(false);
        }
    }

    const onLoad = async () => {
        try{
            const acc = await account.get();
            setActiveAccount(acc);
        }catch(error){
            setError(error)
        }
    }



    const AuthData = {
        model,
        setModel,
        logIn,
        authState,
        registration,
        setAuthState,
        isLoading,
        logOut,
        error,
        activeAccount
    };
    
    return <AuthContext.Provider value={AuthData}>
            {children}
           </AuthContext.Provider>
};