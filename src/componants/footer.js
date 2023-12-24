import SnappLogo from "../assets/SnappLogo";




export default function Footer(){


    return <div className="bg-gray-100 px-12 py-24 mt-5" dir="rtl">
            <div className="flex justify-between max-w-7xl 2xl:mx-auto">
              <div className="">
                <div className="flex items-center justify-between gap-4 ">
                    <SnappLogo className = "w-20"/>   
                    <div>
                        <p className="text-purpleSnapp-300 text-xl font-bold">اسنپ فود</p>
                        <p className="text-gray-800 text-sm">تجربه سفارش غذا، از زودفود تا اسنپ‌فود</p>
                    </div> 
                </div>
                    <ul className="flex items-center justify-end gap-3 ">
                        <li>A</li>
                        <li>B</li>
                        <li>C</li>
                        <li>D</li>
                    </ul>
              </div>
              <div className=" flex items-center gap-44 text-xs font-semibold text-gray-700">
                <div className="flex flex-col gap-6">
                    <p>درباره اسنپ‌فود</p>
                    <p>فرصت‌های شغلی</p>
                    <p>قوانین سایت</p>
                    <p>حریم خصوصی</p>
                    <p>ثبت نام فروشندگان</p>
                </div>
                <div  className="flex flex-col gap-6">
                    <p>تماس با اسنپ‌فود</p>
                    <p>پرسش‌های متداول</p>
                    <p>ثبت شکایات</p>
                    <p>اپلیکیشن موبایل</p>
                </div>
              </div>
              <div>
                <img src="https://snappfood.ir/static/images/senf.png"/>
              </div>
              </div>
           </div>
};