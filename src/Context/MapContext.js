import { createContext } from "react";
import {useState} from "react";
import { Icon } from "leaflet";
import { ID } from "appwrite";
import { DATABASE_ID, LOACTION_COLLECTION, databases } from "../appWriteConfig";
import useAuthContext from "../Hooks/useAuthContext";


export const mapContext = createContext();


export default function MapProvider({children}){

    const [draggable, setDraggable] = useState(false);
    const [isLoading, setIsloading] = useState(false);
    const [error, setError] = useState(false);
    const [position, setPosition] = useState({
        lat:35.7219,
        lng:51.3347
    });
    const {activeAccount} = useAuthContext();

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

    console.log(activeAccount?.$id)
    const setClientLocation = async () => {
        setIsloading(true);
        try{
            const res = await databases.createDocument(DATABASE_ID, LOACTION_COLLECTION, ID.unique(),
            {
                user_id : activeAccount?.$id,
                latitiue : position.lat,
                lngtitue : position.lng
            });
        }catch(error){
            setError(error);
        }finally{
            setIsloading(false)
        }
    };



    const mapData = {
        draggable,
        setDraggable,
        position,
        isLoading,
        setPosition, 
        findLoaction, 
        housingIcon,
        setClientLocation
    };


    return <mapContext.Provider value={mapData}>
              {children}
           </mapContext.Provider>

};


