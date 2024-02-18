import useAuthContext from "../../Hooks/useAuthContext";
import SnappLogo from "../../assets/SnappLogo";
import { TbCurrentLocation } from "react-icons/tb";
import Button from "../../componants/utils/Button";
import AuthModel from "../../componants/form/AuthModel";
import { Link } from "react-router-dom";
import { HiOutlineBuildingStorefront } from "react-icons/hi2";
import ProductsCatgory from "../../componants/ProductsCatgory";
import { CiSearch } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { IoMdExit } from "react-icons/io";
import { ClipLoader } from "react-spinners";
import MapModel from "../../componants/map/MapModel";
import SearchBar from "../../componants/utils/SearchBar";
import useMapContext from "../../Hooks/useMapContext";


export default function MainNavbar(){

    const {model, setModel} = useAuthContext();
    const {activeAccount, logOut, isLoading} = useAuthContext();
    const {addres} = useMapContext()


    function truncateText(text, maxLength) {
        if (text.length > maxLength) {
            // Truncate the text and add ellipsis
            return text.substring(0, maxLength - 3) + "...";
        } else {
            // Return the original text if it's within the limit
            return text;
        }
    }

    return <div className="fixed transform right-1/2 translate-x-1/2  w-full max-w-screen-2xl pb-5 pt-3 top-0 px-4 sm:px-11 border-b-2 z-40 bg-white border-gray-100 shadow-sm">
          <div className="flex justify-between md:grid grid-cols-4 justify-items-start  items-center">
            <div className="flex items-center gap-4">
                <SnappLogo className="w-16 hidden sm:block"/>
                <div 
                className="flex items-center gap-2 cursor-pointer" 
                onClick={() => setModel("map")}>
                    <TbCurrentLocation className="text-gray-400 size-5"/>
                    <p className="text-sm text-gray-600">
                        {
                        addres ? truncateText(addres, 65) :  " آدرس خود راوارد کنید . "
                        }
                    </p>
                </div>
            </div>
             <SearchBar/>   
             <div className="items-center hidden md:flex gap-3 font-semibold text-lg justify-self-end">
               <Link to="/saleSubmit">
               <Button  rounded btnHover className = "flex text-sm items-center gap-2">
                  <HiOutlineBuildingStorefront/>
                 <p>ثبت نام فروشندگان </p>
                  </Button>
               </Link>
                    {
                     activeAccount ?
                     <Button btnHover rounded snapp 
                     className ="py-2 text-xl font-bold text-white" 
                     onClick = {() => logOut()}>
                     {isLoading ?
                     <ClipLoader
                     color="rgba(241, 247, 246, 1)"
                     size={20}
                     className="-my-1"/>
                     :<IoMdExit/>  
                     }
                     </Button>
                     :<Button rounded snapp btnHover
                     className ="py-2 text-sm text-white" 
                     onClick = {() => setModel("auth")} >ورود یا عضوییت</Button> 
                    }   
                    
             </div>
             <div className="flex items-center gap-3">
                <CiSearch className="md:hidden"/>
                <IoPersonOutline 
                    className="md:hidden size-5 justify-self-end"
                    onClick={() => setModel("auth")}/>
                    {
                    model === "auth" ?
                    <AuthModel/>:
                    model === "map" ?
                    <MapModel/>:
                    ""
                    }
             </div>
             </div>
            <ProductsCatgory className="mt-8 mx-auto w-full shadow-none"/>
        </div>  

    };