import { createContext } from "react";
import {useState} from "react";

export const mapContext = createContext();


export default function MapProvider({children}){

    const [draggable, setDraggable] = useState(false);
    const [position, setPosition] = useState({
        lat:35.7219,
        lng:51.3347
    });

    const findLoaction = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            setPosition( {lat:position.coords.latitude, lng:position.coords.longitude})
    })};

    const mapData = {
        draggable,
        setDraggable,
        position,
        setPosition, 
        findLoaction
    };


    return <mapContext.Provider value={mapData}>
              {children}
           </mapContext.Provider>

};


