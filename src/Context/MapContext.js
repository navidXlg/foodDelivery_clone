import { createContext } from "react";
import {useState} from "react";
import { Icon } from "leaflet";


export const mapContext = createContext();


export default function MapProvider({children}){

    const [draggable, setDraggable] = useState(false);
    const [position, setPosition] = useState({
        lat:35.7219,
        lng:51.3347
    });

    const findLoaction = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            setPosition({lat:position.coords.latitude, lng:position.coords.longitude})
    })};

    const housingIcon = new Icon({
        iconUrl: 'https://img.icons8.com/plasticine/100/exterior.png',
        iconSize: [38, 45], // size of the icon
        iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
        popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
    });

    const setClientLocation = () => {

    };

    const mapData = {
        draggable,
        setDraggable,
        position,
        setPosition, 
        findLoaction, 
        housingIcon,
        setClientLocation
    };


    return <mapContext.Provider value={mapData}>
              {children}
           </mapContext.Provider>

};


