import useAuthContext from "../Hooks/useAuthContext";
import SnappLogo from "../assets/SnappLogo";
import { TbCurrentLocation } from "react-icons/tb";
import Button from "./Button";
import AuthModel from "./AuthModel";
import { Link } from "react-router-dom";
import { HiOutlineBuildingStorefront } from "react-icons/hi2";
import ProductsCatgory from "./ProductsCatgory";
import { CiSearch } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { IoMdExit } from "react-icons/io";



export default function MainNavbar(){

    const {model, setModel} = useAuthContext();
    const {activeAccount, logOut} = useAuthContext();
    console.log(activeAccount)


    return <div className="fixed transform right-1/2 translate-x-1/2  w-full max-w-screen-2xl pb-8 pt-6 top-0 px-4 sm:px-11 border-b-2 z-40 bg-white border-gray-100 shadow-sm">
          <div className="flex justify-between md:grid grid-cols-4 justify-items-start  items-center">
            <div className="flex items-center gap-4">
                <SnappLogo className="w-16 hidden sm:block"/>
                <div className="flex items-center gap-2">
                    <TbCurrentLocation className="text-gray-500"/>
                    <p className="font-semibold">برای تغییر آدرس خود کلیک کنید</p>
                </div>
            </div>
            <form className="col-span-2 hidden md:block w-4/5">   
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
             <div className="items-center hidden md:flex gap-3 font-semibold text-lg justify-self-end">
               <Link to="/saleSubmit">
               <Button  rounded className = "flex text-sm items-center gap-2">
                  <HiOutlineBuildingStorefront/>
                 <p>ثبت نام فروشندگان </p>
                  </Button>
               </Link>
                    {
                     activeAccount ?
                     <Button 
                     rounded 
                     snapp 
                     className ="py-2 text-xl font-bold text-white" 
                     onClick = {() => logOut()}><IoMdExit/></Button>
                     :<Button 
                     rounded 
                     snapp 
                     className ="py-2 text-sm text-white" 
                     onClick = {() => setModel("auth")} >ورود یا عضوییت </Button> 
                    }   
             </div>
             <div className="flex items-center gap-3">
                <CiSearch className="md:hidden"/>
                <IoPersonOutline 
                    className="md:hidden size-5 justify-self-end"
                    onClick={() => setModel("auth")}/>
                    {model === "auth" && <AuthModel/>}
             </div>
             </div>
            <ProductsCatgory classname="mt-8 mx-auto w-full shadow-none"/>
        </div>  

    };