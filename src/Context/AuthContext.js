import { createContext, useEffect, useState } from "react";
import { account } from "../appWriteConfig";
import { ID } from "appwrite";


export const AuthContext = createContext();


export default function AuthProvider({children}){

    // Define state variables using useState hook
    const [model, setModel] = useState(null);
    const [authState, setAuthState] = useState("logIn");
    const [isLoading, setIsLoading] = useState(false);
    const [succesMessage, setSuccessMessage] = useState(false);
    const [activeAccount, setActiveAccount] = useState(null);
    const [error, setError] = useState(false);

    // Load user account data on component mount
    useEffect(() => {
        onLoad();
    },[]);

    // Clear error message after a certain time
    useEffect(() => {
        if (error){
            setTimeout(() => {
                setError(false)
            },3000)
        };
    },[error]);


    // Handle success message and reset authentication state after a delay
    useEffect(() => {
        if(succesMessage){
          setAuthState("succes");
          setTimeout(()=>{
            setModel(false);
            setAuthState("logIn");
          },2000) 
      }
      },[succesMessage]);


    // Login function to authenticate user
    const logIn = async (credential) => {
        setIsLoading(true);
        const { email, password } = credential;
        try {
            // Create email session for user authentication
            await account.createEmailSession(email, password);
            const acc = await account.get();
            setActiveAccount(acc);
        } catch (error) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    };
    
    // User registration function
    const registration = async (credential) => {
        setIsLoading(true);
        const { name, email, password, passwordRepeat } = credential;
        if (password !== passwordRepeat) {
            setIsLoading(false);
            setError("رمز عبور مطابقت ندارند");
            return;
        }

        try {
            // Create user account and session
            await account.create(ID.unique(), email, password, name);
            setSuccessMessage(true);
            await account.createEmailSession(email, password);
            const acc = await account.get();
            setActiveAccount(acc);
        } catch (err) {
            setSuccessMessage(false);
            setError(err.message);
            setAuthState("succes");
        } finally {
            setIsLoading(false);
        }
        setSuccessMessage(false);
    };

    // Logout function to end user session
    const logOut = async () => {
        setIsLoading(true);
        try {
            await account.deleteSession('current');
            setActiveAccount(null);
            setIsLoading(false);
            setSuccessMessage("نشست شما باموفقییت پایان یافت.");
        } catch (err) {
            setError(err.message);
            setIsLoading(false);
        }
    };

   // Load user account data
   const onLoad = async () => {
    try {
        const acc = await account.get();
        setActiveAccount(acc);
    } catch (error) {
        // setError(error);
    }
};

    // Define authentication context data
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