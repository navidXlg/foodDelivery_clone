import { FaRegCircleCheck } from "react-icons/fa6";


export default function AuthSucces(){

 return <div className="flex flex-col items-center gap-10 my-12 text-center">
        <FaRegCircleCheck className="size-28 font-bold text-green-600"/>
        <p className="text-xl font-bold">ثبت نام شما باموفقیت انجام شد.</p>
       </div>
 };