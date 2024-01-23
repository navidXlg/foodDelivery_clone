import useOrderContext from "../Hooks/useOrderContext";
import Dropdown from "./DropDown";
import { productFilterOptions } from "../data/data";
import ResturantInfo from "./ResturantInfo";
import useSalesContext from "../Hooks/useSalesContext";
import { useParams } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import { useEffect } from "react";



export default function ProductList ({className}){


    const {filterProducts, setFilterProducts} = useOrderContext();
    const {getSaleCenter, saleCenters, isLoading} = useSalesContext();
    const {productID} = useParams();

    useEffect(() =>{
        getSaleCenter(productID);
    },[])


    return  <div className={`flex flex-col gap-4  ${className}`}>
             {
                isLoading ? 
                <BeatLoader className="mx-auto mt-52" color="rgba(214, 54, 168, 1)" size={20} />:
                <>
                <Dropdown title = "به ترتیب پیش فرض" onChange={setFilterProducts}
                value ={filterProducts} options={productFilterOptions}
                 className = "w-fit"/>
                <div className="flex items-center justify-start gap-3 flex-wrap">
                    {
                        saleCenters.map(item => <ResturantInfo key={item.data.id} item = {item}/>)
                    }
                </div>
                </>
             }   
        </div>
}