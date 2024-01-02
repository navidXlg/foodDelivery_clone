import { TiStar } from "react-icons/ti";
import coffe from "../assets/01.jpg";
import brand from "../assets/639a2baf86335.jpg";
import { MdOutlineSportsMotorsports } from "react-icons/md";



export default function ResturantInfo({src , imgAlt}){

    const cla = "https://cdn.snappfood.ir/300x200/cdn/vendor_sub_types/10/01.jpg";

    return <div className="overflow-hidden relative rounded shadow-lg min-w-80">
            <img src = {coffe} className="w-full h-1/2"/>
            <img src={brand} className="z-30 absolute top-[10rem] rounded-lg shadow-sm right-[7.6rem] size-20 border-4 border-white"/>
            <div className="flex flex-col gap-3 items-center justify-center mt-14 ">
                <p className="text-lg font-bold">کافه توکلی</p>
                <div className="flex items-center text-sm gap-1">
                  <TiStar className="text-yellow-400 "/>
                  <p className="font-semibold text-gray-600">4.5</p>
                  <p className="text-gray-300">(25)</p>
                </div>
                <p className="text-sm text-gray-400 font-semibold">فست فود،پیتزا ساندویچ</p>
                <div className="rounded-lg flex items-center py-2 px-4 justify-between gap-2 shadow-lg my-10">
                  <MdOutlineSportsMotorsports className="text-gray-400"/>  
                  <p className="text-xs">اکسپرس ارسال</p>     
                </div>
            </div>
           </div>

   }