import GroupingVertical from "./GroupingVertical";




export default function ProductFilter({className}){
    return <div className = {` flex flex-col items-center  gap-5${className}`}>
        <GroupingVertical/>
    </div>
};