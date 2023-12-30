import useAuthContext from "../Hooks/useAuthContext";
import SnappLogo from "../assets/SnappLogo";
import AuthModel from "./AuthModel";
import Button from "./Button";
import { HiOutlineBuildingStorefront } from "react-icons/hi2";



export default function NavabarHome(){

   const {setModel,  model} = useAuthContext();


    return <div className="flex items-center justify-between p-8 relative z-30" >
             <div className="flex items-center gap-3 font-semibold text-lg">
                <Button  rounded className = "flex items-center gap-2">
                 <p>ثبت نام فروشندگان </p>
                  <HiOutlineBuildingStorefront/>
                  </Button>
                <Button  rounded snapp className = " py-2 text-white" onClick = {() => setModel("auth")} >ورود یا عضوییت </Button>
             </div>
             <SnappLogo/>
             {model === "auth" && <AuthModel/>}
           </div>
}