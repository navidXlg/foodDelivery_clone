import { createContext, useState } from "react";


export const salesContext = createContext();


export default function SalesProvider({children}){
    const [jobTitle, setJobTitle] = useState(null);
    const [homeTown, setHomeTown] = useState(null);
    const [isFormComplete, setIsFormComplete] = useState(false);
    const [salesCredential, setSalesCredential] = useState({
        storeName:"",
        job:"",
        city:"",
        name:"",
        lastName:"",
        phoneNumber:""
    });

    const handelFormChange = (event) => {
        let name = event.target.id;
        let value = event.target.value;
        setSalesCredential({...salesCredential, [name]:value});
        for(let item in salesCredential){
            setIsFormComplete(true);
            if(salesCredential[item].trim() === "" ) setIsFormComplete(false);
         };
      };

    const handelSalseFromSubmit = (creadential) =>{
        if(isFormComplete)console.log(creadential);;
    };

    
    const saleData = {
        jobTitle,
        setJobTitle,
        homeTown,
        handelFormChange, 
        setHomeTown,
        isFormComplete,
        salesCredential,
        handelSalseFromSubmit
    };



    return <salesContext.Provider value={saleData}>
                {children}
           </salesContext.Provider>

    };


