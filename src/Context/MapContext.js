import { createContext } from "react";

export const mapContext = createContext();


export default function MapProvider(){



    const mapData = {}


    return <mapContext.Provider value={mapData}>

           </mapContext.Provider>

};


