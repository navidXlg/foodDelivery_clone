import useAuthContext from "../Hooks/useAuthContext";
import MapModel from "./MapModel";



export default function Hero (){

    const {setModel, model} = useAuthContext();



    return  <div className="max-w-lg absolute bottom-1/3 sm:top-1/4 md:top-1/3 z-40 text-center bg-opacity-65 md:bg-opacity-0 p-8 rounded-xl  md:p-0 bg-gray-50 text-gray-800 transform translate-x-1/2 md:transform-none translate-y-1/2 md:text-right right-1/2  md:right-10">
            {model === "map" ? <MapModel/> : null}
              <p className="text-2xl md:text-5xl sm:text-4xl mb-2 font-bold">سفارش آنلاین غذا</p>
              <p className=" text-sm sm:text-base md:text-lg mb-8">سفارش آنلاین غذا میوه شیرینی </p>
                <form onClick={() => setModel("map")}>   
                    <label for="default-search" className="mb-2 text-xs sm:text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div className="relative">
                        <input type="search" id="default-search" className="block w-full p-4 ps-10   text-xs sm:text-sm text-gray-900 text-right outline-none shadow-2xl  rounded-3xl bg-gray-50 " placeholder="آدرس خودتان راوارد کنید" required/>
                        <div className="absolute bg-purpleSnapp-300 text-center rounded-full p-3 m-2 inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-white dark:text-gray-400" ariaHidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                        </div>
                    </div>
                </form>
            </div>
};