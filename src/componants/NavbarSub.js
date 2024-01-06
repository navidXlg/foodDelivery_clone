import SnappLogo from "../assets/SnappLogo";
import Button from "./Button";
import { Link } from "react-scroll";



export default function NavbarSub(){



    

    return <div className="pt-6 flex items-center justify-between  max-w-screen-2xl 3xl:mx-auto">
                <ul className="hidden items-center gap-8 font-bold lg:flex">
                    <li><Link activeClass="active" smooth spy to="snappFoodbenifit">آکادمی همکاران</Link></li>
                    <li><Link activeClass="active" smooth spy to="submitionInfo">شرایط ومدارک موردنیاز</Link></li>
                    <li><Link activeClass="active" smooth spy to="submitionSteps"> مراحل ثبت‌نام</Link></li>
                    <li><Link activeClass="active" smooth spy to="commonQuestions">سؤالات متداول</Link></li>
                    <li><Link activeClass="active" smooth spy to="snappFoodbenifit">تماس با ما</Link></li>
                </ul>

             <div className="flex items-center justify-between w-full lg:w-auto gap-10">
                <Button snapp rounded  className ="text-lg text-white py-2 font-bold">دانلود اپلیکیشن دخل</Button>
                <SnappLogo className = "w-20"/>
             </div>
           </div>


    };