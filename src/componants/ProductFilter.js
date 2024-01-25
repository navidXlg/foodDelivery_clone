import GroupingVertical from "./GroupingVertical";
import OrderProperties from "./OrderProperties";
import PriceClass from "./PriceClass";
import { useLocation } from 'react-router-dom';




export default function ProductFilter({className}){

    const location = useLocation();
    return <div className = {`flex flex-col items-center gap-5${className}`}>
        {
            location.pathname.includes("resturants") && <GroupingVertical/>
        }
        <PriceClass/>
        <OrderProperties/>
    </div>
};