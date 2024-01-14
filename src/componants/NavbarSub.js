import SnappLogo from "../assets/SnappLogo";
import Button from "./Button";
import { Link } from "react-scroll";
import { navbarSubItems } from "../data/data";

export default function NavbarSub(){

    return <div className="pt-6 flex items-center justify-between  max-w-screen-2xl 3xl:mx-auto">
                <ul className="hidden items-center gap-8 font-bold lg:flex">
                    {navbarSubItems.map(item => 
                        <li className="hover:text-purpleSnapp-300 transition-all ease-in duration-150 cursor-pointer">
                            <Link activeClass="active" smooth spy to={item.scrollTo}>
                                 {item.title}
                            </Link>
                        </li>)}
                </ul>
             <div className="flex items-center justify-between w-full lg:w-auto gap-10">
                <Button snapp rounded btnHover   className ="text-lg text-white py-2 font-bold">دانلود اپلیکیشن دخل</Button>
                <SnappLogo className = "w-20"/>
             </div>
           </div>
    };