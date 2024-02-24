import { FaRegCircleCheck } from "react-icons/fa6";
import { BounceLoader } from "react-spinners";


export default function AuthSucces(){

 return <div className="flex flex-col items-center gap-10 my-12 text-center">
            <FaRegCircleCheck className="size-28 font-bold text-green-600"/>
            <div className="flex items-center gap-3">
               <BounceLoader
               color="rgba(255, 55, 246, 1)"
               size={25}
               speedMultiplier={1}
               />
               <p className="text-xl font-bold">ثبت نام شما باموفقیت انجام شد.</p>
            </div>
       </div>
 };