import useAuthContext from "../Hooks/useAuthContext";
import HeroInput from "./HeroInput";


export default function Hero (){

    const {setModel, setAuthState} = useAuthContext();
    const handelClick = () => {
        setModel("auth");
        setAuthState("logIn");
    };

    return  <div className="max-w-lg absolute bottom-1/3 sm:top-1/4 md:top-1/3 z-40 text-center bg-opacity-65 md:bg-opacity-0 p-8 rounded-xl  md:p-0 bg-gray-50 text-gray-800 transform translate-x-1/2 md:transform-none translate-y-1/2 md:text-right right-1/2  md:right-10">
              <p className="text-2xl md:text-5xl sm:text-4xl mb-2 font-bold">سفارش آنلاین غذا</p>
              <p className=" text-sm sm:text-base md:text-lg mb-8">سفارش آنلاین غذا میوه شیرینی </p>
                <form onClick={handelClick}>   
                  <HeroInput/>
                </form>
            </div>
};