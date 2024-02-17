import { useContext } from "react";
import { salesContext } from "../Context/SalesContext";

/**
 * useSalesContext is a custom hook that allows components to access the sales context.
 * It uses the useContext hook provided by React to access the salesContext.
 * 
 * @returns {Object} - Returns the sales context provided by salesContext.
 */


export default function useSalesContext(){

    return useContext(salesContext);
}