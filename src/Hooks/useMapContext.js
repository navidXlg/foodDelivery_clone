import { mapContext } from "../Context/MapContext";
import { useContext } from "react";


export default function useMapContext(){
    return useContext(mapContext);
}