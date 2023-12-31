import { Link } from "react-router-dom";
import useAuthContext from "../Hooks/useAuthContext";
import SnappLogo from "../assets/SnappLogo";
import AuthModel from "./AuthModel";
import Button from "./Button";
import { HiOutlineBuildingStorefront } from "react-icons/hi2";
import { IoPersonOutline } from "react-icons/io5";




export default function NavabarHome(){

   const {setModel,  model} = useAuthContext();


    return <div className="flex items-center justify-between p-8 relative z-30" >
             <div className=" items-center gap-3 font-semibold hidden md:flex">
               <Link to="/saleSubmit">
                <Button btnHover rounded className = "flex items-center gap-2">
                  <p>ثبت نام فروشندگان </p>
                  <HiOutlineBuildingStorefront/>
                  </Button>
               </Link>
                <Button  
                rounded 
                snapp
                btnHover 
                className = "py-2 text-white" 
                onClick = {() => setModel("auth")} >ورود یا عضوییت </Button>
             </div>
             <IoPersonOutline 
             className="md:hidden size-5"
             onClick={() => setModel("auth")}/>
             <SnappLogo className = "sm:size-36 size-20"/>
             {model === "auth" && <AuthModel/>}
           </div>
   }