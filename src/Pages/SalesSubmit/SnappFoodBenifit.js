import { BsShop } from "react-icons/bs";
import { BsArrowUpRight } from "react-icons/bs";
import { IoStatsChartSharp } from "react-icons/io5";
import { GrUserWorker } from "react-icons/gr";
import { BsFileText } from "react-icons/bs";
import { LuWallet } from "react-icons/lu";
import { BiMessage } from "react-icons/bi";
import { MdHeadsetMic } from "react-icons/md";





export default function SnappFoodBenifit(){


    return<div data-testid = 'snappFoodBenifit' className="my-10 " id="snappFoodbenifit">
            <p className="text-4xl font-bold my-16">مزایای عضویت در اسنپ‌فود</p>
            <div className=" flex flex-col items-center justify-center gap-3 grid-cols-4 lg:grid gap-x-8 gap-y-14">
                <div className="flex flex-col items-center gap-2 justify-center">
                    <BsShop className="text-purpleSnapp-300 size-10 mb-3"/>
                    <p className="font-bold">افتتاح شعبهٔ مجازی</p>
                    <p>افتتاح شعبهٔ مجازی بدون هزینهٔ اولیه با تسویه حساب منظم (۲ بار در ماه)</p>
                </div>
                <div className="flex flex-col items-center gap-2 justify-center">
                    <BsArrowUpRight className="text-purpleSnapp-300 size-10 mb-3"/>
                    <p className="font-bold">افزایش فروش تا ۳ برابر</p>
                    <p>ارائه خدمات باکیفیت با شما، افزایش فروش با ما</p>
                </div>
                <div className="flex flex-col items-center gap-2 justify-center">
                    <IoStatsChartSharp className="text-purpleSnapp-300 size-10 mb-3"/>
                    <p className="font-bold">دیده‌شدن توسط میلیون‌ها کاربر</p>
                    <p>اسنپ‌فود اولین و بزرگترین سیستم فروش آنلاین در ایران</p>
                </div>
                <div className="flex flex-col items-center gap-2 justify-center">
                    <GrUserWorker className="text-purpleSnapp-300 size-10 mb-3"/>
                    <p className="font-bold"> ارسال با پیک اسنپ‌فود (اکسپرس)</p>
                    <p>ارسال محصول بدون نیاز به داشتن پیک فروشگاه</p>
                </div>
                <div className="flex flex-col items-center gap-2 justify-center">
                    <BsFileText className="text-purpleSnapp-300 size-10 mb-3"/>
                    <p className="font-bold">منوی آنلاین و به‌روز</p>
                    <p>ایجاد منوی آنلاین با قابلیت به‌روزرسانی آسان</p>
                </div>
                <div className="flex flex-col items-center gap-2 justify-center">
                    <LuWallet className="text-purpleSnapp-300 size-10 mb-3"/>
                    <p className="font-bold">مدیریت مالی</p>
                    <p>نرم‌افزار‌های تخصصی برای مدیریت مالی و فروش</p>
                </div>
                <div className="flex flex-col items-center gap-2 justify-center">
                    <BiMessage className="text-purpleSnapp-300 size-10 mb-3"/>
                    <p className="font-bold">دریافت بازخورد از مشتریان</p>
                    <p>هبود کیفیت خدمات با دریافت نظرات مشتریان و امکان پاسخگویی به آن‌ها</p>
                </div>
                <div className="flex flex-col items-center gap-2 justify-center">
                    <MdHeadsetMic className="text-purpleSnapp-300 size-10 mb-3"/>
                    <p className="font-bold">آموزش و پشتیبانی</p>
                    <p>آموزش و پشتیبانی گام به گام از لحظهٔ ثبت‌نام تا رسیدن به فروش بیشتر</p>
                </div>
            </div>
          </div>

};