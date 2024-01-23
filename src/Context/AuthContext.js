import { createContext, useEffect, useState } from "react";
import { ORIGINALUSER_ID, account, teams } from "../appWriteConfig";
import { Permission, Role } from "appwrite";
import { ID } from "appwrite";


export const AuthContext = createContext();


export default function AuthProvider({children}){

    const [model, setModel] = useState(null);
    const [authState, setAuthState] = useState("logIn");
    const [isLoading, setIsloading] = useState(false);
    const [succesMessage, setSuccesMessage] = useState(false);
    const [activeAccount, setActiveAccount] = useState(null);
    const [error, setError] = useState(false);

    useEffect(() => {
        onLoad();
    },[]);
    useEffect(() => {
        if (error){
            setTimeout(() => {
                setError(false)
            },3000)
        };
    });
    useEffect(() => {
        if(succesMessage){
          setAuthState("succes");
          setTimeout(()=>{
            setModel(false);
            setAuthState("logIn");
          },2000) 
      }
      },[]);


    const logIn = async (credential) => {
        // Creating email session for user
        setIsloading(true);
        const {email, password} = credential;

        try {
         await account.createEmailSession(email, password);
         await account.createEmailSession(email, password);
         const acc = await account.get();
         setActiveAccount(acc);

        }catch (error) {
          setError(error.message)
        }finally{
         setIsloading(false)
        }        
    };
    
    const registration = async (credential) => {
        setIsloading(true);
        const {name, email, password, passwordRepeat} = credential;
        if(password !== passwordRepeat){
            setIsloading(false);
            setError("رمز عبور مطابقت ندارند");
            return;
        };

        try{
           await account.create(ID.unique(), email, password, name);
           setSuccesMessage(true);
           await account.createEmailSession(email, password);
           const acc = await account.get();;
           setActiveAccount(acc);           
        }catch(err){
            setSuccesMessage(false);
            setError(err.message);
        }finally{
           setIsloading(false);
        }
        setSuccesMessage(false);
    };

    const logOut = async () => {
        setIsloading(true)
        try{
            await account.deleteSession('current');
            setActiveAccount(null);
            setIsloading(false)
            setSuccesMessage("نشست شما باموفقییت پایان یافت.")
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
            // setError(error)
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
        succesMessage,
        logOut,
        error,
        activeAccount,
    };
    
    return <AuthContext.Provider value={AuthData}>
            {children}
           </AuthContext.Provider>
};