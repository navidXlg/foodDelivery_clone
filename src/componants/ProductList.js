import useOrderContext from "../Hooks/useOrderContext";
import Dropdown from "./DropDown";
import { productFilterOptions } from "../data/data";
import ResturantInfo from "./ResturantInfo";



export default function ProductList ({className}){

    const items = new Array(10).fill(0);
    const {filterProducts, setFilterProducts} = useOrderContext();

    

    return <div className={`flex flex-col gap-4 items-center ${className}`}>
        <Dropdown title = "به ترتیب پیش فرض" onChange={setFilterProducts} value ={filterProducts} options={productFilterOptions} className = "w-56 justify-self-start"/>
        <div className="flex items-center justify-start gap-3 flex-wrap">
            {
            items.map(item => <ResturantInfo/>)
            }
        </div>
    </div>

}