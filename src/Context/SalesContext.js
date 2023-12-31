import { createContext, useState } from "react";


export const salesContext = createContext();

export default function SalesProvider({children}){
    const [jobTitle, setJobTitle] = useState(null);
    const [homeTown, setHomeTown] = useState(null);
    const [salesCredential, setSalesCredential] = useState({
        job:"",
        city:"",
        name:"",
        lastName:"",
        phoneNumber:""
    });

    const handelSalseFromSubmit = (creadential) =>{
        console.log(jobTitle , homeTown)
        console.log(creadential);
    };

    
    const saleData = {
        jobTitle,
        setJobTitle,
        homeTown, 
        setHomeTown,
        salesCredential,
        handelSalseFromSubmit
    };



    return <salesContext.Provider value={saleData}>
                {children}
           </salesContext.Provider>

};


