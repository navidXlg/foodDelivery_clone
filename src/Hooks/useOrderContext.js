import { useContext } from "react";
import { OrderContext } from "../Context/OrderContext";


export default function useOrderContext(){
    return useContext(OrderContext);

};