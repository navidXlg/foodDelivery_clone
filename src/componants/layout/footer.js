import SnappLogo from "../../assets/SnappLogo";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa6";
import { PiTelegramLogoDuotone } from "react-icons/pi";
import { SlSocialTwitter } from "react-icons/sl";


/**
 * Footer component renders the footer section of the application.
 * It displays company information, social media links, and other relevant links.
 * @returns {JSX.Element} - Rendered JSX element for the footer section.
 */
export default function Footer(){

  
  return (
    <div className="bg-gray-100 px-12 py-24 mt-5" dir="rtl">
        <div className="flex flex-col items-center md:items-start md:flex-row gap-16 text-center md:gap-0 justify-between max-w-7xl 2xl:mx-auto">
            <div>
                <div className="flex items-center md:justify-between gap-4">
                    <SnappLogo className="sm:w-20 w-10" />
                    <div>
                        <p className="text-purpleSnapp-300 text-base sm:text-xl font-bold">اسنپ فود</p>
                        <p className="text-gray-800 text-xs sm:text-sm">تجربه سفارش غذا، از زودفود تا اسنپ‌فود</p>
                    </div>
                </div>
                {/* Social Media Links */}
                <ul className="flex items-center text-sm sm:text-xl mt-5 md:justify-end gap-2 sm:gap-9">
                    <li className="bg-white rounded-full p-3 shadow-lg"><AiOutlineInstagram /></li>
                    <li className="bg-white rounded-full p-3 shadow-lg"><FaLinkedinIn /></li>
                    <li className="bg-white rounded-full p-3 shadow-lg"><PiTelegramLogoDuotone /></li>
                    <li className="bg-white rounded-full p-3 shadow-lg"><SlSocialTwitter /></li>
                </ul>
            </div>
            {/* Useful Links */}
            <div className="flex items-center gap-24 sm:gap-44 text-xs font-semibold text-gray-700">
                <div className="flex flex-col gap-6">
                    <p>درباره اسنپ‌فود</p>
                    <p>فرصت‌های شغلی</p>
                    <p>قوانین سایت</p>
                    <p>حریم خصوصی</p>
                    <p>ثبت نام فروشندگان</p>
                </div>
                <div className="flex flex-col gap-6">
                    <p>تماس با اسنپ‌فود</p>
                    <p>پرسش‌های متداول</p>
                    <p>ثبت شکایات</p>
                    <p>اپلیکیشن موبایل</p>
                </div>
            </div>
            {/* Company Partners */}
            <div>
                <img src="https://snappfood.ir/static/images/senf.png" alt="Senf" />
            </div>
        </div>
    </div>
    );
};