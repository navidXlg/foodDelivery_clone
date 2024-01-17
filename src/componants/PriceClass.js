import { useState } from "react"



export default function PriceClass(){

    const [pricefilter, setPriceFilter] = useState("econimic")
     const dataFilterConig = [
        {
            label : "همه",
            value : "all"
        },
        {
            label : "اقتصادی",
            value : "econimic"
        },
        {
            label : "متوسط",
            value : "avrage"
        },
        {
            label : "گران",
            value : "expoensive"
        },
     ];

     const activeBtnStyle = "bg-white py-1 text-green-600 rounded-xl px-4";

    return <div className="shadow-lg px-2 py-6 w-[280px] text-sm">
            <p className=" mb-4">کلاس قیمتی</p>
            <ul className="flex items-center bg-gray-100 rounded-2xl p-2 justify-around" >
                {
                    dataFilterConig.map(item => 
                    <li className = { pricefilter === item.value ? activeBtnStyle : ""} >
                        {item.label}
                    </li> 
                )}
            </ul>
          </div>


 };