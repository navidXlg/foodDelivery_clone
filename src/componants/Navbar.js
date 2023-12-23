import useAuthContext from "../Hooks/useAuthContext";
import SnappLogo from "../assets/SnappLogo";
import AuthModel from "./AuthModel";
import Button from "./Button";



export default function Navabar(){

   const {setModel,  model} = useAuthContext();


    return <div className="flex items-center justify-between p-8 relative z-30" >
             <div className="flex items-center gap-3">
                <Button snapp rounded >ثبت نام فروشندگان </Button>
                <Button rounded onClick = {() => setModel("auth")} >ورود یا عضوییت </Button>
             </div>
             <SnappLogo/>
             {model === "auth" && <AuthModel/>}
           </div>
}