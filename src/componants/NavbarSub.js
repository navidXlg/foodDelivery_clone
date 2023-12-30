import SnappLogo from "../assets/SnappLogo";
import Button from "./Button";



export default function NavbarSub(){

    return <div className="pt-6 flex items-center justify-between">
                <ul className="flex items-center gap-8 font-bold">
                    <li>آکادمی همکاران</li>
                    <li>شرایط و مدارک مورد نیاز</li>
                    <li>مراحل ثبت‌نام</li>
                    <li>سؤالات متداول</li>
                    <li>تماس با ما</li>
                </ul>

             <div className="flex items-center gap-10">
                <Button snapp rounded  className ="text-lg text-white py-2 font-bold">دانلود اپلیکیشن دخل</Button>
                <SnappLogo className = "w-20"/>
             </div>
           </div>


    };