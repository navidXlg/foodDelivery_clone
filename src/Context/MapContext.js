import { createContext, useEffect } from "react";
import {useState} from "react";
import { Icon } from "leaflet";
import { ID } from "appwrite";
import { DATABASE_ID, LOACTION_COLLECTION, databases } from "../appWriteConfig";
import useAuthContext from "../Hooks/useAuthContext";
import axios from "axios";

// Create a new context for map-related data
export const mapContext = createContext();


// MapProvider component manages map-related state and provides context to child components
export default function MapProvider({children}){

    const [draggable, setDraggable] = useState(false);
    const [isLoading, setIsloading] = useState(false);
    const {setModel} = useAuthContext();
    const [addres, setAddres] = useState("");
    const [error, setError] = useState(false);
    // latitiue and lngtitue fot tehran 
    const [position, setPosition] = useState({
        lat:35.7219,
        lng:51.3347
    });
    const {activeAccount} = useAuthContext();

    useEffect(() => {
        activeAccount && onLoadLoaction(activeAccount.$id) ;
    },[activeAccount])



    // Function to find user's location using geolocation API
    const findLoaction = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            setPosition({lat:position.coords.latitude, lng:position.coords.longitude})
    })};


    // Create a custom marker icon using Leaflet Icon class
    const housingIcon = new Icon({
        iconUrl: 'https://img.icons8.com/plasticine/100/exterior.png',
        iconSize: [38, 45], // size of the icon
        iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
        popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
    });

    // Function to set client location in the database
    const setClientLocation = async () => {
        setIsloading(true);
        try{
            const addresFarsi  = await fetchReverseGeocoding(position.lat, position.lng );
            await databases.createDocument(DATABASE_ID, LOACTION_COLLECTION, ID.unique(),
            {
                user_id : activeAccount?.$id,
                latitiue : position.lat,
                lngtitue : position.lng,
                addres : addresFarsi
            });
            setAddres(addresFarsi);
            setModel(false)

        }catch(error){
            setError(error);
        }finally{
            setIsloading(false)
        }
    };
    
     const fetchReverseGeocoding =  async (lat , lng) => {
        const url = 'https://api.exoapi.dev/reverse-geocoding';
        const apiKey = "f3e0e18d014945a6b0458807f9cf4c00-bb7d15acab7345bd90ce804a5fac58fe";
        const locale = 'en-GB';
    
        const data = new URLSearchParams();
        data.append('lat', lat);
        data.append('lon', lng);
        data.append('locale', locale);
    
        const config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': `Bearer ${apiKey}`
            }
        };
    
        try {
            const response = await axios.post(url, data, config);
            const {city, region, street, houseNumber} = response.data
            const addres =  street + houseNumber
            return addres;
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const onLoadLoaction = async (documetnId) => {

        console.log(documetnId)
        try {
            const response  = await databases.getDocument(DATABASE_ID, LOACTION_COLLECTION, documetnId);
            setAddres()
                }
        catch(error){
            console.log(error)
        }
    }





    const mapData = {
        draggable,
        setDraggable,
        position,
        isLoading,
        setPosition, 
        findLoaction, 
        housingIcon,
        setClientLocation,
        addres
    };


    return <mapContext.Provider value={mapData}>
              {children}
           </mapContext.Provider>

};


