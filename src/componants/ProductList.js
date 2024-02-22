import useOrderContext from "../Hooks/useOrderContext";
import Dropdown from "./utils/DropDown";
import { productFilterOptions } from "../data/data";
import ResturantInfo from "./ResturantInfo";
import useSalesContext from "../Hooks/useSalesContext";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from 'react-router-dom';
import CardSkelton from "../Pages/CardSkelton";
import { useScrollToTop } from "../Hooks/useScrollTop";


export default function ProductList ({className}){


    const {filterProducts, setFilterProducts} = useOrderContext();

    const {getSaleCenter, saleCenters, pricefilter,orderProp, isLoading, salesCenterFilter} = useSalesContext();

    const {productID} = useParams();
    const loaction = useLocation();
    useScrollToTop();

    useEffect(() =>{
        getSaleCenter(productID);
    },[loaction.pathname, salesCenterFilter]);
    
    let salseCenterFinal;
    loaction.pathname.includes("resturants") && salesCenterFilter ? salseCenterFinal = saleCenters.filter(item => item.filtering === salesCenterFilter):
    salseCenterFinal = saleCenters;

    const salom = () => {

        if (pricefilter){
            return salseCenterFinal.filter(item => item.is_eco === pricefilter);
        }
        return salseCenterFinal;
    };

    const all = salom();

    const abab = all.filter(item => {
        for (let propItem of orderProp){
            if(propItem === "deliver" && item.deliver !== true){
                return false;
            }
            if(propItem === "has_coupon" && item.has_coupon !== true){
                return false;
            }
            if(propItem === "is_open" &&  item.is_open !== true){
                return false;
            }
            if(propItem === "is_express" && item.is_express !== true ){
                return false;
            }
            if(propItem === "is_eco" && item.is_eco !== true ){
                return false;
            }
        }
        return true
    });

    console.log(abab)

    return  <div className={`flex flex-col gap-4 ${className}`}>
             {
                isLoading ? 
                <CardSkelton quntite={7} />:
                <>
                <Dropdown title = "به ترتیب پیش فرض" onChange={setFilterProducts}
                value ={filterProducts} options={productFilterOptions}
                className = "w-fit"/>
                <div className="flex items-center justify-start gap-3 flex-wrap">
                    {
                        abab.length > 0 ? salseCenterFinal.map(item => <ResturantInfo key={item.id} item = {item}/>):
                        <p className="font-bold mx-auto mt-28 text-xl text-purpleSnapp-300">موردی برای نمایش وجود ندارد . </p>
                    }
                </div>
                </>
             }   
        </div>
}