import SnappLogo from "../assets/SnappLogo";
import Button from "./Button";



export default function Navabar(){


    return <div className="flex items-center justify-between relative z-30" >
             <SnappLogo/>
             <div className="flex items-center gap-3">
                <Button snapp rounded >ثبت نام فروشندگان </Button>
                <Button rounded >ورود یا عضوییت </Button>
             </div>
           </div>
}