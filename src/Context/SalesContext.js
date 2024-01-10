import { createContext, useState } from "react";
import { DATABASE_ID, SALESCENTER_COLLECTION, databases } from "../appWriteConfig";
import { ID } from "appwrite";


export const salesContext = createContext();


export default function SalesProvider({children}){

    const [jobTitle, setJobTitle] = useState(null);
    const [homeTown, setHomeTown] = useState(null);
    const [isFormComplete, setIsFormComplete] = useState(false);
    const [salesCredential, setSalesCredential] = useState({
        storeName:"",
        name:"",
        lastName:"",
        phoneNumber:""
    });

    console.log(salesCredential)
    const handelFormChange = (event) => {
        let name = event.target.id;
        let value = event.target.value;
        setSalesCredential({...salesCredential, [name]:value});
        for(let item in salesCredential){
            setIsFormComplete(true);
            if(salesCredential[item].trim() === "" ) setIsFormComplete(false);
         };
      };

    const handelSalseFromSubmit = async(creadential) =>{
        if(isFormComplete){
            const data = {
                name : creadential.name,
                lastName : creadential.lastName,
                phoneNumber : creadential.phoneNumber,
                storeName : creadential.storeName,
                jobTitle : jobTitle.label,
                homeTown : homeTown.label
            }
            try{
                const response = await databases.createDocument(DATABASE_ID, SALESCENTER_COLLECTION, ID.unique(), data);
                console.log(response.data);
                console.log("done")
            }catch(error){
                console.log(error)
            }


        };
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


