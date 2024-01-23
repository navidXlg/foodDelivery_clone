import { TiStar } from "react-icons/ti";
import { MdOutlineSportsMotorsports } from "react-icons/md";



export default function ResturantInfo({item}){


    return <div className="overflow-hidden w-[320px] relative rounded shadow-lg min-w-80 m-2 hover:shadow-2xl">
            <img src = {item.data.backgroundImage} className="w-full  h-[200px] "/>
            <img src={item.data.featured} className="z-30 absolute top-[10rem] rounded-lg shadow-lg right-[7.6rem] size-20 border-4 border-white"/>
            <div className="flex flex-col gap-3 items-center justify-center mt-14 ">
                <p className="text-lg font-bold">{item.data.title}</p>
                <div className="flex items-center text-sm gap-1">
                  <TiStar className="text-yellow-400 "/>
                  <p className="font-semibold text-gray-600">4.5</p>
                  <p className="text-gray-300">(25)</p>
                </div>
                <p className="text-sm text-gray-400 font-semibold">{item.data.description}</p>
                <div className="rounded-lg flex items-center py-2 px-4 justify-between gap-2 shadow-lg my-10">
                  <MdOutlineSportsMotorsports className="text-gray-400"/>  
                  <p className="text-xs">اکسپرس ارسال</p>     
                </div>
            </div>
           </div>

   }