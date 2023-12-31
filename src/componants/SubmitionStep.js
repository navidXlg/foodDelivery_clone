import { TiDocumentText } from "react-icons/ti";
import { FiCamera } from "react-icons/fi";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { FaHandshake } from "react-icons/fa";


export default function SubmitionStep(){



    return <div className="flex items-center justify-between gap-12">
             <div className="flex items-center justify-center  flex-col gap-3">
                <TiDocumentText className="size-20 text-green-700 bg-green-50 rounded-full p-3"/>
                <p className="text-2xl font-bold mt-8">‌ثبت اطلاعات مالک و فروشگاه</p>
                <p>اطلاعات هویتی، اطلاعات تجاری، اطلاعات تماس</p>
             </div>
             <div className="flex items-center justify-center flex-col gap-3">
                <FiCamera className="size-20 text-green-700 bg-green-50 rounded-full p-3"/>
                <p className="text-2xl font-bold mt-8">بارگذاری مدارک</p>
                <p>تصویر کارت ملی، تصویر اصل جواز کسب یا اجاره نامه رسمی یا سند فروشگاه</p>
             </div>
             <div className="flex items-center justify-center flex-col gap-3">
                <HiOutlineClipboardDocumentList className="size-20 text-green-700 bg-green-50 rounded-full p-3"/>
                <p className="text-2xl font-bold mt-8">عقد قرارداد</p>
                <p>مطالعه شرایط قرارداد و امضای دیجیتال</p>
             </div>
             <div className="flex items-center justify-center flex-col gap-3">
                <FaHandshake className="size-20 text-green-700 bg-green-50 rounded-full p-3"/>
                <p className="text-2xl font-bold mt-8">پایان ثبت‌نام</p>
                <p>به جمع فروشندگان اسنپ‌فود خوش آمدید</p>
             </div>
           </div>

}