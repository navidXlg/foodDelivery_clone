import { HiOutlineBuildingStorefront } from "react-icons/hi2";
import Button from "./utils/Button";
import { Link } from "react-router-dom";



export default function SalesCenters(){


    return <div className="bg-gray-50 rounded-xl relative my-36 py-16 px-10 flex items-center justify-between text-right">
              <div>
                <img src="https://snappfood.ir/static/images/vendor_pic.png" className="absolute hidden lg:block -top-14"/>
              </div>
              <div className="mx-auto flex items-center justify-center flex-col lg:mx-0 lg:block">
                <p className="text-2xl sm:text-4xl mb-5">صاحب کسب و کار هستید ؟</p>
                <p className="text-sm sm:text-lg mb-10 text-gray-800">.با اسنپ فود کسب و کارتان را آنلاین کنید و فروشتان را افزایش دهید</p>
                <Link to = "/saleSubmit">
                <Button snapp btnHover  rounded className = "font-semibold text-sm sm:text-lg py-2 flex items-center gap-1 text-white float-right" >
                  <p> ثبت نام فروشندگان</p> 
                  <HiOutlineBuildingStorefront className="text-xl sm:text-2xl"/>                  
                </Button>
                </Link>
              </div>
           </div>
};