import SnappLogo from "../assets/SnappLogo";
import Button from "./Button";
import { Link } from "react-scroll";



export default function NavbarSub(){



    

    return <div className="pt-6 flex items-center justify-between">
                <ul className="flex items-center gap-8 font-bold">
                    <li><Link activeClass="active" smooth spy to="snappFoodbenifit">آکادمی همکاران</Link></li>
                    <li><Link activeClass="active" smooth spy to="submitionInfo">شرایط ومدارک موردنیاز</Link></li>
                    <li><Link activeClass="active" smooth spy to="submitionSteps"> مراحل ثبت‌نام</Link></li>
                    <li><Link activeClass="active" smooth spy to="commonQuestions">سؤالات متداول</Link></li>
                    <li><Link activeClass="active" smooth spy to="snappFoodbenifit">تماس با ما</Link></li>
                </ul>

             <div className="flex items-center gap-10">
                <Button snapp rounded  className ="text-lg text-white py-2 font-bold">دانلود اپلیکیشن دخل</Button>
                <SnappLogo className = "w-20"/>
             </div>
           </div>


    };