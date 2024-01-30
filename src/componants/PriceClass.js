import useSalesContext from "../Hooks/useSalesContext";
import { dataFilterConig } from "../data/data";


export default function PriceClass(){

    const {setPriceFilter, pricefilter} = useSalesContext();

    return <div className="shadow-lg px-2 py-6 w-[280px] text-sm">
            <p className=" mb-4">کلاس قیمتی</p>
            <ul className="flex items-center h-[40px] bg-gray-100 rounded-2xl cursor-pointer p-2 justify-around" >
                {
                    dataFilterConig.map(item => 
                    <li className = { pricefilter === item.value ? "bg-white py-1 text-green-600  transition-all duration-500 rounded-xl px-4 " : ""}
                     onClick={() => setPriceFilter(item.value)}>
                        {item.label}
                    </li> 
                )}
            </ul>
          </div>
 };