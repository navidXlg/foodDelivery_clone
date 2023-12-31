import useAuthContext from "../Hooks/useAuthContext";
import SnappLogo from "../assets/SnappLogo";
import { TbCurrentLocation } from "react-icons/tb";
import Button from "./Button";
import AuthModel from "./AuthModel";
import { Link } from "react-router-dom";
import { HiOutlineBuildingStorefront } from "react-icons/hi2";
import ProductsCatgory from "./ProductsCatgory";



export default function MainNavbar(){

    const {model, setModel} = useAuthContext();


    return <div className="fixed w-full py-8 top-0 right-0 px-11 border-b-2 z-40 bg-white border-gray-100 shadow-sm">
          <div className="grid grid-cols-4 justify-items-start ">
            <div className="flex items-center gap-4">
                <SnappLogo className="w-16"/>
                <div className="flex items-center">
                    <TbCurrentLocation/>
                    <p>برای تغییر آدرس خود کلیک کنید</p>
                </div>
            </div>
            <form className="col-span-2 w-4/5">   
            <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                </div>
                <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="جست و جو در اسنپ فود ... " required/>
            </div>
            </form>
             <div className="flex items-center gap-3 font-semibold text-lg justify-self-end">
               <Link to="/saleSubmit">
               <Button  rounded className = "flex text-sm items-center gap-2">
                 <p>ثبت نام فروشندگان </p>
                  <HiOutlineBuildingStorefront/>
                  </Button>
               </Link>
                <Button  rounded snapp className = " py-2 text-sm text-white" onClick = {() => setModel("auth")} >ورود یا عضوییت </Button>
                {model === "auth" && <AuthModel/>}
             </div>
             </div>
            <ProductsCatgory classname="mt-8"/>
        </div>  

    };