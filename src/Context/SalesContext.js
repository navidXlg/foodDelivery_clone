import { createContext, useState } from "react";
import { DATABASE_ID, SALESCENTER_COLLECTION, databases} from "../appWriteConfig";
import { ID } from "appwrite";
import { productId } from "../Hooks/ProductIdApp";

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
    const [salesCenterFilter,setSalesCenterFilter] = useState("");
    const [pricefilter, setPriceFilter] = useState(null);
    const [orderProp, setOrderProp] = useState([]);

    // useEffect(() => {
    //     if(pricefilter !== "all"){
    //         const salews = saleCenters.filter(item => item.data?.pricefilter === true);
    //         setSaleCenter(salews);
    //     }
    // },[pricefilter])


     // Function to handle form changes and update sales credentials
    const handelFormChange = (event) => {
        let name = event.target.id;
        let value = event.target.value;
        setSalesCredential({...salesCredential, [name]:value});
        for(let item in salesCredential){
            setIsFormComplete(true);
            if(salesCredential[item].trim() === "" ) setIsFormComplete(false);
         };
    };


    // Function to handle sales form submission
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
            }catch(error){
                setErrorMsg(error);
            }finally{
                setIsloading(false);
            }
        };
    };


    const getSaleCenter = async (product) => {
        setIsloading(true);
        try {
            // Fetch sales centers data from the server
            const {documents}= await databases.listDocuments(DATABASE_ID , productId(product));
            setSaleCenter(documents);
        }catch(err){
            setErrorMsg(err);
        }finally{
            setIsloading(false);
        }
    };

        // Function to toggle order properties
    const setProductProperties = (label) => {
        if(orderProp.includes(label)){
            setOrderProp(orderProp.filter(item => item !== label));
        }else{
            setOrderProp([...orderProp, label])
        }
    };



    const saleData = {
        jobTitle,
        isLoading,
        saleCenters,
        errorMsg,
        setJobTitle,
        salesCenterFilter,
        setSalesCenterFilter,
        homeTown,
        handelFormChange, 
        setHomeTown,
        setProductProperties,
        isFormComplete,
        salesCredential,
        handelSalseFromSubmit,
        pricefilter,
        orderProp,
        setOrderProp, 
        setPriceFilter,
        getSaleCenter
    };
 
    return <salesContext.Provider value={saleData}>
                {children}
           </salesContext.Provider>
    };


