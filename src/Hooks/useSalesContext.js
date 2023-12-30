import { useContext } from "react";
import { salesContext } from "../Context/SalesContext";


export default function useSalesContext(){

    return useContext(salesContext);
}