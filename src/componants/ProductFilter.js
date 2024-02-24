import GroupingVertical from "./GroupingVertical";
import OrderProperties from "./OrderProperties";
import PriceClass from "./PriceClass";
import { useLocation } from 'react-router-dom';




export default function ProductFilter({className}){

    // Get the current location using the useLocation hook
    const location = useLocation();
    return (
        // Container for product filters
        <div className={`flex flex-col items-center px-3 gap-5 ${className}`}>
            {/* Display GroupingVertical filter only if the route includes "restaurants" */}
            {location.pathname.includes('resturants') && <GroupingVertical />}
            {/* Display PriceClass filter */}
            <PriceClass />
            {/* Display OrderProperties filter */}
            <OrderProperties />
        </div>
    );
}