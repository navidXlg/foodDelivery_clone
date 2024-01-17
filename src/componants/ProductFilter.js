import GroupingVertical from "./GroupingVertical";
import PriceClass from "./PriceClass";




export default function ProductFilter({className}){
    return <div className = {` flex flex-col items-center gap-5${className}`}>
        <GroupingVertical/>
        <PriceClass/>
    </div>
};