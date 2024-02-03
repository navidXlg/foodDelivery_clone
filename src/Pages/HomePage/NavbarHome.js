import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import useAuthContext from "../../Hooks/useAuthContext";
import SnappLogo from "../../assets/SnappLogo";
import AuthModel from "../../componants/form/AuthModel";
import Button from "../../componants/utils/Button";
import { HiOutlineBuildingStorefront } from "react-icons/hi2";
import { IoPersonOutline } from "react-icons/io5";



export default function NavabarHome(){

   // Access authentication context and set model state for authentication
   const {setModel,  model} = useAuthContext();


   return (
    <div className="flex items-center justify-between p-8 relative z-30">
      <div className="items-center gap-3 font-semibold hidden md:flex">
        <Link to="/saleSubmit" data-testid ='changPage'>
          {/* Button for registering sellers */}
          <Button btnHover rounded className="flex items-center gap-2">
            <p>ثبت نام فروشندگان</p> 
            <HiOutlineBuildingStorefront /> 
          </Button>
        </Link>
        <Button
          rounded
          snapp
          btnHover
          className="py-2 text-white"
          onClick={() => setModel("auth")}
        >
          ورود یا عضویت 
        </Button>
      </div>

      {/* Icon for mobile view to trigger authentication modal */}
      <IoPersonOutline 
        className="md:hidden size-5 hover:text-purpleSnapp-300 transition-all ease-in duration-200"
        onClick={() => setModel("auth")}
      />
      <SnappLogo  className="sm:size-36 size-20" />
      {/* Render authentication modal if model state is 'auth' */}
    
      {model === "auth" && <AuthModel />}
    </div>
  );
   }