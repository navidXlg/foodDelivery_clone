import { createContext, useState } from "react";
import { DATABASE_ID, SALESCENTER_COLLECTION, databases } from "../appWriteConfig";
import { ID } from "appwrite";
import SalesCenters from "../componants/Salescenters";


export const salesContext = createContext();


export default function SalesProvider({children}){

    const [jobTitle, setJobTitle] = useState(null);
    const [homeTown, setHomeTown] = useState(null);
    const [isLoading, setIsloading] = useState(false);
    const [errorMsg, setErrorMsg] = useState(null);
    const [isFormComplete, setIsFormComplete] = useState(false);
    const [salesCredential, setSalesCredential] = useState({
        storeName:"",
        name:"",
        lastName:"",
        phoneNumber:""
    });
    const [saleCenters, setSaleCenter] = useState([]);

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
        setIsloading(true);
        if(isFormComplete){
            const data = {
                name : creadential.name,
                lastName : creadential.lastName,
                phoneNumber : creadential.phoneNumber,
                storeName : creadential.storeName,
                jobTitle : jobTitle.label,
                homeTown : homeTown.label
            };
            try{
                await databases.createDocument(DATABASE_ID, SALESCENTER_COLLECTION, ID.unique(), data);
                setIsloading(false);
    
            }catch(error){
                setErrorMsg(error);
                setIsloading(false);
            }
        };
    };

    const getSaleCenter = async (product) => {
        setIsloading(true);
        try {
            const res = await fetch(`http://localhost:3001/${product}`);
            const resJson = await res.json();
            setSaleCenter(resJson);
        }catch(err){
            setErrorMsg(err);

        }finally{
            setIsloading(false);
        }
    };



    const saleData = {
        jobTitle,
        isLoading,
        saleCenters,
        errorMsg,
        setJobTitle,
        homeTown,
        handelFormChange, 
        setHomeTown,
        isFormComplete,
        salesCredential,
        handelSalseFromSubmit,
        getSaleCenter
    };


    return <salesContext.Provider value={saleData}>
                {children}
           </salesContext.Provider>
    };


