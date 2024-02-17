import { useContext } from "react";
import { OrderContext } from "../Context/OrderContext";

/**
 * useOrderContext is a custom hook that allows components to access the order context.
 * It uses the useContext hook provided by React to access the AuthContext.
 * 
 * @returns {Object} - Returns the order context provided by orderContext.
 */


export default function useOrderContext(){
    return useContext(OrderContext);

};