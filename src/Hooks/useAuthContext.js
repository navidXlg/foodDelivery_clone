import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";


/**
 * useAuthContext is a custom hook that allows components to access the authentication context.
 * It uses the useContext hook provided by React to access the AuthContext.
 * 
 * @returns {Object} - Returns the authentication context provided by AuthContext.
 */

export default function useAuthContext(){

    return useContext(AuthContext);
}