import useSalesContext from "../Hooks/useSalesContext"
import { productTitle } from "../data/data"


// Define the GroupingVertical component
export default function GroupingVertical (){

   // Extract necessary states and functions from the sales context
   const {setSalesCenterFilter, salesCenterFilter} = useSalesContext();

   return (
    // Container for grouping vertical component
    <div className="shadow-md rounded-lg w-[280px] text-sm p-5 py-3">
        <p className="bg-gray-100 p-3 rounded-md mb-5">همه دسته بندی ها</p>
        {/* Map through product titles and render each as a clickable item */}
        {productTitle.map(item => (
            <div
                key={item.titleId}
                onClick={() => setSalesCenterFilter(item.titleId)} 
                className={`flex gap-3 ${salesCenterFilter === item.titleId && "bg-gray-100"} items-center mb-5 cursor-pointer rounded-lg hover:bg-gray-100 p-2`}
            >
                {/* Display product title image */}
                <img src={item.src} className="size-10 rounded-full" alt={item.title}/>
                <p>{item.title}</p>
            </div>
        ))}
    </div>
);

}