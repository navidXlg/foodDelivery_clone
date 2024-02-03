import { GoPerson } from "react-icons/go";
import { LuStore } from "react-icons/lu";
import { IoTimeOutline } from "react-icons/io5";


export default function InfoTable(){
    
    return<div className="flex flex-col gap-10 items-center sm:flex-row justify-around shadow-lg my-24 py-10">
            <div className="flex flex-col items-center justify-center gap-3">
                <GoPerson className="text-purpleSnapp-300 bg-purple-100 rounded-full size-16 p-4"/>
                <p className="text-3xl text-purpleSnapp-300 font-bold">‌میلیون‌ها مشتری</p>
                <p className="font-semibold">در پلتفرم اسنپ‌فود</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-3">
                <LuStore className="text-purpleSnapp-300 bg-purple-100 rounded-full size-16 p-4"/>
                <p className="text-3xl text-purpleSnapp-300 font-bold">۳۰,۰۰۰+</p>
                <p className="font-semibold">فروشگاه فعال</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-3">
                <IoTimeOutline className="text-purpleSnapp-300 bg-purple-100 rounded-full size-16 p-4"/>
                <p className="text-3xl text-purpleSnapp-300 font-bold">۱۴ سال</p>
                <p className="font-semibold">سابقه فعالیت از سال ۸۸</p>
            </div>
         </div>
 };