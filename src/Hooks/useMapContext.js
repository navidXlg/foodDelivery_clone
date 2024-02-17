import { mapContext } from "../Context/MapContext";
import { useContext } from "react";


/**
 * useMapContext is a custom hook that allows components to access the map context.
 * It uses the useContext hook provided by React to access the AuthContext.
 * 
 * @returns {Object} - Returns the map context provided by mapContext.
 */

export default function useMapContext(){
    return useContext(mapContext);
}